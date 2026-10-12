import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Plus,
  Minus,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Linkedin, Instagram, Facebook } from "../assets/icons/SocialIcons";
import contactHeroVisual from "../assets/images/contact_hero_cityscape.jpg";

// Six approved FAQs exactly as specified in the authoritative PDF
const FAQ_ITEMS = [
  {
    id: 1,
    question: "What services does Silgate Digital offer?",
    answer:
      "Silgate Digital offers a range of digital services, including Web Development, SEO, Social Media Management, Digital Marketing, Creative & Graphic Design, and UGC & Content Creation. Our services are designed to help businesses establish, strengthen and grow their digital presence.",
  },
  {
    id: 2,
    question: "How can I discuss my project requirements with Silgate Digital?",
    answer:
      "You can share your requirements through the enquiry form on our Contact Us page or email us at info@silgatedigital.com. Our team will review your enquiry and connect with you to understand your business needs and discuss suitable solutions.",
  },
  {
    id: 3,
    question:
      "Can Silgate Digital provide multiple digital services for one business?",
    answer:
      "Yes. Silgate Digital offers multiple digital services that can support different aspects of your business. Whether you require website development, SEO, social media management, digital marketing or creative content, our team can discuss your requirements and explore suitable solutions.",
  },
  {
    id: 4,
    question: "How do I request a quotation for a project?",
    answer:
      "You can request a quotation by submitting your project requirements through our Contact Us enquiry form. Share details about the services you need, your business objectives and the scope of your project. Our team will review the information and connect with you to discuss the requirements before preparing a quotation.",
  },
  {
    id: 5,
    question:
      "Does Silgate Digital work with businesses from different industries?",
    answer:
      "Yes. Silgate Digital serves businesses across industries, including BFSI, Fintech, Insurance, Real Estate, Education, Healthcare, Retail & E-commerce, and Travel & Hospitality. We focus on understanding industry-specific business requirements and providing relevant digital solutions.",
  },
  {
    id: 6,
    question: "How can I follow up on an enquiry?",
    answer:
      "You can follow up by emailing info@silgatedigital.com with your name, company name and details of your previous enquiry. Our team can use this information to identify your request and assist you further.",
  },
];

// Approved Service Required Dropdown Options (exact locked list)
const SERVICE_OPTIONS = [
  "Web Development",
  "SEO",
  "Social Media Management",
  "Digital Marketing",
  "Creative & Graphic Design",
  "UGC & Content Creation",
  "Other / General Enquiry",
];

// Official verified social channels
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/Silgate-media-pvt-ltd",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/Silgate.media/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Silgatemedia",
    Icon: Facebook,
  },
];

export default function Contact() {
  // Page SEO / document title
  useEffect(() => {
    document.title = "Contact Us | Silgate Digital";
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceRequired: "",
    requirements: "",
    website_hp: "", // Honeypot field for spam prevention
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // FAQ Accordion State (single-item expansion, initial open: null or first item)
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Smooth scroll handler for Hero CTA
  const scrollToEnquiry = () => {
    const targetElement = document.getElementById("enquiry-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error as user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  // Client-Side Validation
  const validateForm = () => {
    const errors = {};

    // 1. Full Name: required, sensible character validation (at least 2 letters)
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required.";
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName =
        "Please enter a valid full name (minimum 2 characters).";
    }

    // 2. Business Email: required, valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Business Email is required.";
    } else if (!emailPattern.test(formData.email.trim())) {
      errors.email = "Please enter a valid business email address.";
    }

    // 3. Phone Number: required, supports Indian and international numbers
    const cleanPhone = formData.phone.trim().replace(/[\s\-()]/g, "");
    const phonePattern = /^(\+?[0-9]{1,4})?[0-9]{7,15}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required.";
    } else if (!phonePattern.test(cleanPhone) || cleanPhone.length < 8) {
      errors.phone = "Please enter a valid telephone number.";
    }

    // 4. Company Name: optional

    // 5. Service Required: mandatory selection
    if (
      !formData.serviceRequired ||
      !SERVICE_OPTIONS.includes(formData.serviceRequired)
    ) {
      errors.serviceRequired = "Please select a required service.";
    }

    // 6. Your Requirements: required; reject empty or whitespace-only input
    if (!formData.requirements.trim()) {
      errors.requirements = "Please tell us about your requirements.";
    } else if (formData.requirements.trim().length < 10) {
      errors.requirements =
        "Please provide a few more details about your project (minimum 10 characters).";
    }

    return errors;
  };

  // Form Submission Handler integrating with backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot spam prevention
    if (formData.website_hp) {
      return; // Silent reject for spam bots
    }

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          serviceRequired: formData.serviceRequired,
          requirements: formData.requirements.trim(),
          website_hp: formData.website_hp,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Clear sensitive inputs while preserving success state
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          serviceRequired: "",
          requirements: "",
          website_hp: "",
        });
        setFieldErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch {
      // Network or API failure - do NOT fake success
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 1 — CONTACT US HERO BANNER (LOCKED)                                */}
        {/* ========================================================================= */}
        <section
          id="hero"
          className="relative bg-gradient-to-b from-[#F2F7FC] via-[#F8FAFC] to-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column (Desktop 50%) */}
              <div className="lg:col-span-6 flex flex-col items-start z-10">
                <span className="text-[#F36C3D] font-bold text-xs uppercase tracking-[0.18em] mb-3 sm:mb-4">
                  GET IN TOUCH
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#07172C] leading-[1.12] tracking-tight mb-4 sm:mb-5">
                  Let's Connect and Build Something Great Together.
                </h1>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mb-7 sm:mb-9">
                  Have a project in mind or looking for the right digital
                  partner? Connect with Silgate Digital to discuss your business
                  requirements, explore our services and discover how we can
                  support your goals through technology, marketing and creative
                  solutions.
                </p>

                <button
                  type="button"
                  id="hero-enquiry-cta"
                  onClick={scrollToEnquiry}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-[#F36C3D] hover:bg-[#D95627] text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F36C3D]/60 cursor-pointer"
                >
                  <span>Send Us an Enquiry</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Right Column (Desktop 50% Visual) */}
              <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px]">
                  {/* Subtle Orange Glow Backdrop */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#F36C3D]/20 via-[#F6C84A]/10 to-transparent rounded-t-[180px] rounded-b-2xl blur-xl opacity-70 pointer-events-none" />

                  {/* Arched Architectural Visual Container matching Reference Image */}
                  <div className="relative p-2.5 sm:p-3 rounded-t-[180px] rounded-b-2xl bg-gradient-to-b from-[#F36C3D] via-[#F36C3D]/80 to-[#F6C84A]/30 shadow-2xl">
                    <div className="relative w-full aspect-[4/4.8] rounded-t-[170px] rounded-b-xl overflow-hidden bg-slate-900">
                      <img
                        src={contactHeroVisual}
                        alt="Silgate Digital Collaboration and Corporate Skyline"
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                        loading="eager"
                      />
                      {/* Gradient overlay for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07172C]/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2 — CONTACT INFORMATION & ENQUIRY FORM (LOCKED)                   */}
        {/* ========================================================================= */}
        <section
          id="enquiry-section"
          className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 scroll-mt-6"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-2xl mb-10 sm:mb-12">
              <span className="text-[#F36C3D] font-bold text-xs uppercase tracking-[0.18em] mb-2 block">
                LET'S TALK
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07172C] tracking-tight mb-3">
                Tell Us About Your Requirements
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you're planning a new website, looking to improve your
                digital presence or exploring creative and marketing solutions,
                we'd love to understand your requirements. Share a few details,
                and our team will get in touch with you.
              </p>
            </div>

            {/* Two Column Card Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
              {/* Left Column (approx 40%): Deep Navy Contact Panel */}
              <div className="lg:col-span-5 bg-[#07172C] text-white rounded-2xl p-7 sm:p-9 lg:p-10 flex flex-col justify-between shadow-xl border border-[#132C4E] relative overflow-hidden">
                {/* Subtle Ambient Background Accent */}
                <div className="absolute -top-24 -right-24 w-52 h-52 bg-[#F36C3D]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 tracking-tight">
                    Contact Information
                  </h3>

                  <div className="space-y-6 sm:space-y-7">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F36C3D]/15 border border-[#F36C3D]/30 flex items-center justify-center flex-shrink-0 text-[#F36C3D]">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Email Us
                        </p>
                        <a
                          href="mailto:info@silgatedigital.com"
                          className="text-sm sm:text-base font-semibold text-white hover:text-[#F36C3D] transition-colors break-all"
                        >
                          info@silgatedigital.com
                        </a>
                      </div>
                    </div>

                    {/* Visit Us */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F36C3D]/15 border border-[#F36C3D]/30 flex items-center justify-center flex-shrink-0 text-[#F36C3D]">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Visit Us
                        </p>
                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                          Road Number 8, S. G. Barve Road,
                          <br />
                          Wagle Estate, Thane, Maharashtra
                        </p>
                      </div>
                    </div>

                    {/* Call Us - Pending Confirmation, Strictly Uninvented */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F36C3D]/15 border border-[#F36C3D]/30 flex items-center justify-center flex-shrink-0 text-[#F36C3D]">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Call Us
                        </p>
                        <a
                          href="tel:+918108810916"
                          className="text-sm sm:text-base font-semibold text-white hover:text-[#F36C3D] hover:underline transition-colors break-all"
                        >
                          +91 81088 10916
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connect With Us */}
                <div className="relative z-10 pt-8 sm:pt-10 mt-8 border-t border-[#132C4E]">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3.5">
                    Connect With Us
                  </p>
                  <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Silgate Digital on ${label}`}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F36C3D] border border-white/15 flex items-center justify-center text-slate-200 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F36C3D]"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (approx 60%): White Enquiry Form */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 lg:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#07172C] mb-6 tracking-tight">
                    Send Us an Enquiry
                  </h3>

                  {/* Submission Success State */}
                  {submitStatus === "success" ? (
                    <div
                      id="submission-success-banner"
                      className="py-10 px-6 sm:px-8 text-center bg-emerald-50/70 border border-emerald-200/80 rounded-xl"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-emerald-950 mb-2">
                        Thank You for Contacting Us!
                      </h4>
                      <p className="text-emerald-800 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6">
                        Your enquiry has been submitted successfully. Our team
                        will review your requirements and get in touch with you.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus(null)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-colors cursor-pointer"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5 sm:space-y-6"
                    >
                      {/* Submission Failure Alert */}
                      {submitStatus === "error" && (
                        <div
                          id="submission-failure-banner"
                          className="p-4 sm:p-5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3.5 text-red-800"
                        >
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-bold text-sm sm:text-base text-red-900 mb-0.5">
                              Unable to Submit Your Enquiry
                            </h5>
                            <p className="text-xs sm:text-sm text-red-700 leading-relaxed">
                              We couldn't submit your enquiry at the moment.
                              Please try again or email us at{" "}
                              <a
                                href="mailto:info@silgatedigital.com"
                                className="underline font-semibold hover:text-red-950"
                              >
                                info@silgatedigital.com
                              </a>
                              .
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Honeypot field (hidden from legitimate visitors) */}
                      <input
                        type="text"
                        name="website_hp"
                        value={formData.website_hp}
                        onChange={handleInputChange}
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />

                      {/* Row 1: Full Name & Business Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* 1. Full Name */}
                        <div>
                          <label
                            htmlFor="fullName"
                            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                          >
                            Full Name <span className="text-[#F36C3D]">*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            aria-required="true"
                            aria-invalid={!!fieldErrors.fullName}
                            className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 ${
                              fieldErrors.fullName
                                ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                : "border-slate-200 bg-white hover:border-slate-300 focus:border-[#00529B] focus:ring-2 focus:ring-[#00529B]/15"
                            }`}
                          />
                          {fieldErrors.fullName && (
                            <p className="mt-1 text-xs text-red-600 font-medium">
                              {fieldErrors.fullName}
                            </p>
                          )}
                        </div>

                        {/* 2. Business Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                          >
                            Business Email{" "}
                            <span className="text-[#F36C3D]">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            aria-required="true"
                            aria-invalid={!!fieldErrors.email}
                            className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 ${
                              fieldErrors.email
                                ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                : "border-slate-200 bg-white hover:border-slate-300 focus:border-[#00529B] focus:ring-2 focus:ring-[#00529B]/15"
                            }`}
                          />
                          {fieldErrors.email && (
                            <p className="mt-1 text-xs text-red-600 font-medium">
                              {fieldErrors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Phone Number & Company Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* 3. Phone Number */}
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                          >
                            Phone Number{" "}
                            <span className="text-[#F36C3D]">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            aria-required="true"
                            aria-invalid={!!fieldErrors.phone}
                            className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 ${
                              fieldErrors.phone
                                ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                : "border-slate-200 bg-white hover:border-slate-300 focus:border-[#00529B] focus:ring-2 focus:ring-[#00529B]/15"
                            }`}
                          />
                          {fieldErrors.phone && (
                            <p className="mt-1 text-xs text-red-600 font-medium">
                              {fieldErrors.phone}
                            </p>
                          )}
                        </div>

                        {/* 4. Company Name (Optional) */}
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter company name"
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#00529B] focus:ring-2 focus:ring-[#00529B]/15 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Row 3: Service Required (Mandatory Dropdown) */}
                      <div>
                        <label
                          htmlFor="serviceRequired"
                          className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                        >
                          Service Required{" "}
                          <span className="text-[#F36C3D]">*</span>
                        </label>
                        <select
                          id="serviceRequired"
                          name="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={handleInputChange}
                          aria-required="true"
                          aria-invalid={!!fieldErrors.serviceRequired}
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 outline-none transition-all duration-200 bg-white cursor-pointer ${
                            fieldErrors.serviceRequired
                              ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                              : "border-slate-200 hover:border-slate-300 focus:border-[#00529B] focus:ring-2 focus:ring-[#00529B]/15"
                          }`}
                        >
                          <option value="">Select a service</option>
                          {SERVICE_OPTIONS.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        {fieldErrors.serviceRequired && (
                          <p className="mt-1 text-xs text-red-600 font-medium">
                            {fieldErrors.serviceRequired}
                          </p>
                        )}
                      </div>

                      {/* Row 4: Your Requirements (Multiline Text Area) */}
                      <div>
                        <label
                          htmlFor="requirements"
                          className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                        >
                          Your Requirements{" "}
                          <span className="text-[#F36C3D]">*</span>
                        </label>
                        <textarea
                          id="requirements"
                          name="requirements"
                          rows={4}
                          value={formData.requirements}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project or requirements..."
                          aria-required="true"
                          aria-invalid={!!fieldErrors.requirements}
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 outline-none resize-none transition-all duration-200 ${
                            fieldErrors.requirements
                              ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                              : "border-slate-200 bg-white hover:border-slate-300 focus:border-[#00529B] focus:ring-2 focus:ring-[#00529B]/15"
                          }`}
                        />
                        {fieldErrors.requirements && (
                          <p className="mt-1 text-xs text-red-600 font-medium">
                            {fieldErrors.requirements}
                          </p>
                        )}
                      </div>

                      {/* Privacy Note */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                        <ShieldCheck className="w-4 h-4 text-[#00529B] flex-shrink-0" />
                        <span>
                          Your information will be used to respond to your
                          enquiry.{" "}
                          <Link
                            to="/privacy-policy"
                            className="underline hover:text-[#00529B] transition-colors"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </span>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        id="submit-enquiry-btn"
                        disabled={isSubmitting}
                        className={`w-full py-3.5 px-6 rounded-lg bg-[#F36C3D] hover:bg-[#D95627] text-white font-bold text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F36C3D]/60 ${
                          isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Submitting Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Enquiry</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3 — OUR OFFICE LOCATION & GOOGLE MAPS (LOCKED)                    */}
        {/* ========================================================================= */}
        <section
          id="location-section"
          className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-2xl mb-10 sm:mb-12">
              <span className="text-[#F36C3D] font-bold text-xs uppercase tracking-[0.18em] mb-2 block">
                FIND US
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07172C] tracking-tight mb-3">
                Visit Our Office
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Looking to connect with us in person? Find our office location
                below and use Google Maps to plan your visit.
              </p>
            </div>

            {/* Desktop Two Column / Mobile Stacked */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
              {/* Left Column (approx 40%): Office Card */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F36C3D]/15 border border-[#F36C3D]/30 flex items-center justify-center text-[#F36C3D] mb-6">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#07172C] mb-4 tracking-tight">
                    Silgate Digital
                  </h3>

                  <div className="mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      OFFICE ADDRESS
                    </span>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                      Road Number 8, S. G. Barve Road,
                      <br />
                      Wagle Estate, Thane, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Road+Number+8,+S.+G.+Barve+Road,+Wagle+Estate,+Thane,+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get directions to Silgate Digital office on Google Maps"
                    className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#F36C3D] hover:bg-[#D95627] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F36C3D]/60 cursor-pointer"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column (approx 60%): Interactive Google Maps Embed */}
              <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm min-h-[360px] sm:min-h-[400px] h-full relative">
                <iframe
                  title="Silgate Digital Office Location - Google Maps"
                  src="https://maps.google.com/maps?q=Road%20Number%208%2C%20S.%20G.%20Barve%20Road%2C%20Wagle%20Estate%2C%20Thane%2C%20Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "360px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[360px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4 — FREQUENTLY ASKED QUESTIONS (LOCKED)                           */}
        {/* ========================================================================= */}
        <section
          id="faq-section"
          className="relative bg-white py-16 sm:py-20 lg:py-24"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-[#F36C3D] font-bold text-xs uppercase tracking-[0.18em] mb-2 inline-block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07172C] tracking-tight mb-3">
                Have Questions? We're Here to Help.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Find answers to common questions about our services, project
                discussions and how to get started with Silgate Digital.
              </p>
            </div>

            {/* Centered Single-Column Accordion */}
            <div className="space-y-3.5">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                const questionId = `faq-question-${faq.id}`;
                const answerId = `faq-answer-${faq.id}`;

                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200 hover:border-slate-300"
                  >
                    <button
                      type="button"
                      id={questionId}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg text-[#07172C] hover:text-[#00529B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00529B] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                          isOpen
                            ? "bg-[#07172C] text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-96 opacity-100 px-6 pb-6 pt-1 text-slate-600 border-t border-slate-100 text-sm sm:text-base leading-relaxed"
                          : "max-h-0 opacity-0 overflow-hidden px-6 py-0 border-t-0"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Global Footer is rendered globally via AppContent.jsx */}
      </main>
    </div>
  );
}
