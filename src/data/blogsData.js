import imgHeroCity from "../assets/images/contact_hero_cityscape.jpg";
import imgDigitalMarketing from "../assets/images/digital-marketing-services.png";
import imgSocialMedia from "../assets/images/social-media-management-services.png";
import imgSocialMedia2 from "../assets/images/social-media-services.png";
import imgWebDev from "../assets/images/web-dev-services.png";
import imgSeo from "../assets/images/seo-services.png";
import imgAnalytics from "../assets/images/analytic.webp";
import imgGraphicDesign from "../assets/images/brand-strategy-indian-d2c-global-expansion-1024x576.png";
import imgUgc from "../assets/images/ugc-services.png";
import imgWebFintech from "../assets/images/web-app-development-fintech-startups-bangalore-1024x576.webp";
import imgPackaging from "../assets/images/brand-packaging-beauty-brands-us-retail-1024x576.webp";
import imgDubai from "../assets/images/corporate-films-real-estate-developers-dubai-1024x576.webp";
import imgSearch from "../assets/images/search-advertising-professional-services-new-york-1024x576.webp";

export const BLOG_POSTS = [
  // ==========================================
  // FEATURED POSTS (from Reference Design)
  // ==========================================
  {
    slug: "how-seo-can-drive-sustainable-business-growth-2026",
    title: "How SEO Can Drive Sustainable Business Growth in 2026",
    excerpt:
      "Discover key strategies, trends and best practices to improve visibility and attract the right audience.",
    image: imgHeroCity,
    date: "Sep 25, 2026",
    author: "Silgate SEO Team",
    readTime: "5 min read",
    category: "SEO",
    featured: true,
    isPrimaryFeatured: true,
    sections: [
      {
        heading: "The Shift Toward Search Intent & AI Engine Visibility",
        text: "In 2026, search algorithms prioritize authoritative content that addresses search intent directly. Driving organic traffic requires structured data, topical authority, and continuous technical refinement."
      },
      {
        heading: "Conversion-Focused Organic Funnels",
        text: "Traffic without conversion is vanity. Modern SEO focuses on high-intent long-tail keywords that guide visitors seamlessly toward qualified leads and booked consultations."
      }
    ]
  },
  {
    slug: "digital-marketing-trends-every-business-should-know",
    title: "Digital Marketing Trends Every Business Should Know",
    excerpt:
      "Stay ahead of the curve with actionable insights into omnichannel funnels, AI-driven targeting, and modern attribution.",
    image: imgDigitalMarketing,
    date: "Sep 18, 2026",
    author: "Silgate Growth Pod",
    readTime: "4 min read",
    category: "Digital Marketing",
    featured: true,
    sections: [
      {
        heading: "Omnichannel Synergy in Modern Consumer Journeys",
        text: "Connecting social ads, search touchpoints, and personalized email nurturing creates a unified brand footprint that reduces customer acquisition costs."
      }
    ]
  },
  {
    slug: "how-to-build-a-strong-brand-presence-on-social-media",
    title: "How to Build a Strong Brand Presence on Social Media",
    excerpt:
      "Learn how consistent storytelling, high-retention formats, and community engagement elevate brand authority.",
    image: imgSocialMedia,
    date: "Sep 12, 2026",
    author: "Silgate Social Studio",
    readTime: "6 min read",
    category: "Social Media Management",
    featured: true,
    sections: [
      {
        heading: "Authenticity & Video-First Formats",
        text: "Short-form video paired with genuine creator voices outpaces heavily scripted corporate ads across LinkedIn, Instagram, and YouTube Shorts."
      }
    ]
  },

  // ==========================================
  // EXPLORE BLOGS POSTS (from Reference Design)
  // ==========================================
  {
    slug: "essential-features-of-a-high-performing-business-website",
    title: "Essential Features of a High-Performing Business Website",
    excerpt:
      "A complete guide to speed, responsiveness, conversion architecture, and UX principles that turn visitors into clients.",
    image: imgWebDev,
    date: "Sep 10, 2026",
    author: "Web Engineering Team",
    readTime: "5 min read",
    category: "Web Development",
    sections: [
      {
        heading: "Core Web Vitals & Sub-Second Page Loads",
        text: "Speed directly impacts conversion rate and ranking signals. Modern frameworks and image compression ensure lightning-fast performance across all screen sizes."
      }
    ]
  },
  {
    slug: "on-page-vs-off-page-seo-what-works-best-in-2026",
    title: "On-Page vs Off-Page SEO: What Works Best in 2026?",
    excerpt:
      "Analyzing the balance between technical on-page architecture and high-authority digital PR backlinks.",
    image: imgSeo,
    date: "Sep 08, 2026",
    author: "Silgate SEO Pod",
    readTime: "4 min read",
    category: "SEO",
    sections: [
      {
        heading: "Balancing Content Quality with Backlink Authority",
        text: "While on-page relevance sets the foundation, authoritative industry mentions provide the credibility search engines need to award top rankings."
      }
    ]
  },
  {
    slug: "10-creative-ideas-to-boost-social-media-engagement",
    title: "10 Creative Ideas to Boost Social Media Engagement",
    excerpt:
      "Fresh formats, interactive polls, carousel structures, and community questions that drive authentic interactions.",
    image: imgSocialMedia2,
    date: "Aug 28, 2026",
    author: "Creative Content Team",
    readTime: "5 min read",
    category: "Social Media Management",
    sections: [
      {
        heading: "Engaging Audiences with Interactive Formats",
        text: "Ask insightful questions, share raw behind-the-scenes moments, and structure educational carousels with clear hooks."
      }
    ]
  },
  {
    slug: "how-data-driven-marketing-helps-businesses-grow-faster",
    title: "How Data-Driven Marketing Helps Businesses Grow Faster",
    excerpt:
      "Leveraging real-time analytics, user behavior heatmaps, and multi-touch attribution to maximize campaign ROI.",
    image: imgAnalytics,
    date: "Aug 20, 2026",
    author: "Performance Analytics Team",
    readTime: "6 min read",
    category: "Digital Marketing",
    sections: [
      {
        heading: "Eliminating Guesswork with Precision Analytics",
        text: "Tracking each step of the buyer journey enables smart allocation of marketing budgets to channels that produce actual revenue."
      }
    ]
  },
  {
    slug: "how-visual-design-impacts-brand-perception",
    title: "How Visual Design Impacts Brand Perception",
    excerpt:
      "Understanding typography, color psychology, and brand consistency in creating lasting customer trust.",
    image: imgGraphicDesign,
    date: "Aug 14, 2026",
    author: "Design Studio Lead",
    readTime: "5 min read",
    category: "Creative & Graphic Design",
    sections: [
      {
        heading: "The Subconscious Psychology of Brand Aesthetics",
        text: "High-end design immediately communicates credibility, enabling businesses to command premium pricing and customer loyalty."
      }
    ]
  },
  {
    slug: "why-ugc-is-the-future-of-brand-storytelling",
    title: "Why UGC Is the Future of Brand Storytelling",
    excerpt:
      "Why consumers trust relatable customer experiences more than traditional commercial advertisements.",
    image: imgUgc,
    date: "Aug 08, 2026",
    author: "UGC Creative Pod",
    readTime: "4 min read",
    category: "UGC & Content Creation",
    sections: [
      {
        heading: "Peer-to-Peer Trust in Modern Marketing",
        text: "Authentic user-generated videos resonate with consumers because they demonstrate real products solving real everyday problems."
      }
    ]
  },
  {
    slug: "local-seo-strategies-for-growing-your-business",
    title: "Local SEO Strategies for Growing Your Business",
    excerpt:
      "Master Google Business Profile optimization, localized citations, and regional keyword dominance.",
    image: imgSeo,
    date: "Jul 29, 2026",
    author: "Local Search Specialist",
    readTime: "5 min read",
    category: "SEO",
    sections: [
      {
        heading: "Dominating the Local Map Pack",
        text: "Consistent NAP data, positive customer reviews, and hyper-local landing pages ensure your business captures nearby search demand."
      }
    ]
  },
  {
    slug: "website-redesign-checklist-for-better-performance",
    title: "Website Redesign Checklist for Better Performance",
    excerpt:
      "Step-by-step audit guide covering URL redirects, responsive design, brand coherence, and technical SEO hygiene.",
    image: imgWebFintech,
    date: "Jul 20, 2026",
    author: "Silgate Engineering",
    readTime: "6 min read",
    category: "Web Development",
    sections: [
      {
        heading: "Protecting Search Traffic During Redesigns",
        text: "A proper 301 redirect map and staging environment audit guarantee that redesigns elevate traffic rather than hurting rankings."
      }
    ]
  },

  // Additional In-depth Articles
  {
    slug: "brand-packaging-design-beauty-brands-us-retail-market",
    title: "Brand packaging design for beauty brands entering the US retail market",
    excerpt: "Silgate explains how brand packaging design for beauty brands entering the US retail market wins shelf attention.",
    image: imgPackaging,
    date: "Jul 15, 2026",
    author: "Branding Editorial",
    readTime: "6 min read",
    category: "Creative & Graphic Design",
    sections: [
      {
        heading: "Shelf Appeal & Compliance",
        text: "Packaging must pass FDA MoCRA requirements while communicating value in under 1.5 seconds."
      }
    ]
  },
  {
    slug: "corporate-films-real-estate-developers-dubai",
    title: "Corporate films for real estate developers in Dubai",
    excerpt: "How corporate films for real estate developers in Dubai build the trust that turns international buyers into sales.",
    image: imgDubai,
    date: "Jul 10, 2026",
    author: "Video Production Team",
    readTime: "5 min read",
    category: "UGC & Content Creation",
    sections: [
      {
        heading: "Architectural Cinematography",
        text: "Conveying prestige and tangible investment yield through high-production video."
      }
    ]
  },
  {
    slug: "search-advertising-professional-services-new-york",
    title: "Search advertising for professional services firms in New York",
    excerpt: "How search advertising turns costly clicks into qualified client consultations.",
    image: imgSearch,
    date: "Jul 05, 2026",
    author: "PPC Team",
    readTime: "7 min read",
    category: "Digital Marketing",
    sections: [
      {
        heading: "High-Ticket Conversion Architecture",
        text: "Precision negative keyword sculpting and dayparting are vital in hyper-competitive markets."
      }
    ]
  }
];

export const BLOG_CATEGORIES = [
  "All",
  "Web Development",
  "SEO",
  "Social Media Management",
  "Digital Marketing",
  "Creative & Graphic Design",
  "UGC & Content Creation",
];
