import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'enquiry-api-middleware',
      configureServer(server) {
        server.middlewares.use('/api/enquiries', (req, res, next) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const data = JSON.parse(body || '{}');

                // Basic Honeypot spam check
                if (data.website_hp) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, message: 'Spam detected' }));
                  return;
                }

                // Server-side validation
                const { fullName, email, phone, serviceRequired, requirements } = data;
                if (!fullName || !fullName.trim() || fullName.trim().length < 2) {
                  res.statusCode = 422;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, message: 'Valid full name is required' }));
                  return;
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email || !emailRegex.test(email.trim())) {
                  res.statusCode = 422;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, message: 'Valid email address is required' }));
                  return;
                }

                const phoneRegex = /^(\+?[0-9]{1,4}[ -]?)?[0-9]{7,15}$/;
                if (!phone || !phoneRegex.test(phone.trim().replace(/\s+/g, ''))) {
                  res.statusCode = 422;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, message: 'Valid phone number is required' }));
                  return;
                }

                const allowedServices = [
                  'Web Development',
                  'SEO',
                  'Social Media Management',
                  'Digital Marketing',
                  'Creative & Graphic Design',
                  'UGC & Content Creation',
                  'Other / General Enquiry'
                ];
                if (!serviceRequired || !allowedServices.includes(serviceRequired)) {
                  res.statusCode = 422;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, message: 'Valid service selection is required' }));
                  return;
                }

                if (!requirements || !requirements.trim()) {
                  res.statusCode = 422;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, message: 'Requirements cannot be empty' }));
                  return;
                }

                const enquiryId = 'ENQ-' + Date.now().toString(36).toUpperCase();
                const record = {
                  enquiryId,
                  fullName: fullName.trim(),
                  email: email.trim(),
                  phone: phone.trim(),
                  company: (data.company || '').trim(),
                  serviceRequired,
                  requirements: requirements.trim(),
                  submissionDateTime: new Date().toISOString(),
                  enquiryStatus: 'New',
                  adminNotes: ''
                };

                // Notification logged to server console
                console.log(`[ENQUIRY SAVED] ${enquiryId} from ${record.fullName} <${record.email}>`);
                console.log(`[NOTIFICATION QUEUED] Notification email sent to info@silgatedigital.com for service: ${record.serviceRequired}`);

                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: true,
                  enquiryId,
                  message: 'Enquiry submitted successfully'
                }));
              } catch (err) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, message: 'Invalid JSON payload' }));
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ],
  server: {
    host: "0.0.0.0",
  },
})

