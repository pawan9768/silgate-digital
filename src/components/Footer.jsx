import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { Linkedin, Instagram, Facebook } from "../assets/icons/SocialIcons";
import logoImg from "../assets/images/logo.png";

/* ================= FOOTER DATA (single source of truth) ================= */

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/automotive-digital-marketing-agency" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blogs", to: "/blog" },
  { label: "Careers", to: "/career" },
  { label: "Contact Us", to: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", to: "/services/website-development-india" },
  { label: "SEO", to: "/services/seo-services" },
  { label: "Social Media Management", to: "/services/social-media-marketing" },
  { label: "Digital Marketing", to: "/performance-marketing-agency" },
  {
    label: "Creative & Graphic Design",
    to: "/services/creative-communication",
  },
  { label: "UGC & Content Creation", to: "/services/ugc-video-agency" },
];

const industryLinks = [
  { label: "BFSI", to: "/industries/bfsi" },
  { label: "Fintech", to: "/industries/fintech" },
  { label: "Insurance", to: "/industries/insurance" },
  { label: "Real Estate", to: "/digital-marketing-agency-for-real-estate" },
  {
    label: "Education",
    to: "/digital-marketing-agency-for-education-industry",
  },
  { label: "Healthcare", to: "/digital-marketing-services-for-healthcare" },
  { label: "Retail & E-commerce", to: "/digital-marketing-for-ecommerce-2" },
  { label: "Travel & Hospitality", to: "/industries/travel-hospitality" },
];

// Official social URLs — update here only if they change
const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/silgate-digital/home/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/silgate_digital/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Silgatemedia",
    Icon: Facebook,
  },
];

const CONTACT_PHONE = "+91 81088 10916";
const WHATSAPP_NUMBER = "918108810916";
const CONTACT_EMAIL = "info@silgatedigital.com";

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.031 2C6.516 2 2.03 6.484 2.03 12c0 1.954.562 3.844 1.63 5.474L2 22l4.672-1.614C8.24 21.36 10.1 21.92 12.031 21.92c5.516 0 10-4.484 10-9.92 0-5.516-4.484-10-10-10zm5.834 14.156c-.244.686-1.42 1.314-1.958 1.396-.494.075-1.127.108-3.642-.932-3.218-1.33-5.286-4.606-5.446-4.82-.16-.214-1.3-1.73-1.3-3.3 0-1.57.82-2.343 1.112-2.663.292-.32.64-.4.854-.4.214 0 .428.002.614.011.196.01.46-.074.72.55.268.643.914 2.23.994 2.39.08.16.134.348.026.562-.107.214-.16.348-.32.535-.16.187-.336.417-.48.56-.16.16-.327.334-.14.655.187.32.83 1.366 1.782 2.214 1.224 1.09 2.256 1.428 2.576 1.588.32.16.508.134.695-.08.187-.214.8-0.934 1.014-1.254.214-.32.428-.268.72-.16.293.107 1.85.872 2.168 1.033.32.16.534.24.614.374.08.134.08.775-.164 1.461z" />
    </svg>
  );
}

/* ================= MOBILE ACCORDION ================= */

function FooterAccordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 text-left text-[#0B2345] font-bold text-xs uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] rounded-sm transition-colors hover:text-[#F15A24]"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#0056A6] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ================= SHARED PIECES ================= */

function LinkList({ links }) {
  return (
    <ul className="space-y-2.5 text-xs sm:text-sm">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className="text-[#0056A6] hover:text-[#F15A24] transition-colors focus:outline-none focus-visible:text-[#F15A24] inline-block py-0.5"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SocialIcons({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0056A6] hover:text-white hover:bg-[#F15A24] hover:border-[#F15A24] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] shadow-xs"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

function GetInTouchContent() {
  return (
    <div className="space-y-3 text-xs sm:text-sm text-[#475569]">
      {/* 1. WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-[#0056A6] hover:text-[#F15A24] transition-colors group"
      >
        <span className="w-8 h-8 rounded-lg bg-[#0056A6]/10 border border-[#0056A6]/20 flex items-center justify-center text-[#0056A6] group-hover:bg-[#F15A24] group-hover:border-[#F15A24] group-hover:text-white transition-all shrink-0">
          <WhatsAppIcon className="w-4 h-4" />
        </span>
        <span className="font-medium">+91 81088 10916</span>
      </a>

      {/* 2. Email */}
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="flex items-center gap-3 text-[#0056A6] hover:text-[#F15A24] transition-colors group"
      >
        <span className="w-8 h-8 rounded-lg bg-[#0056A6]/10 border border-[#0056A6]/20 flex items-center justify-center text-[#0056A6] group-hover:bg-[#F15A24] group-hover:border-[#F15A24] group-hover:text-white transition-all shrink-0">
          <Mail className="w-4 h-4" />
        </span>
        <span className="font-medium break-all">{CONTACT_EMAIL}</span>
      </a>

      {/* 3. Call */}
      <a
        href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
        className="flex items-center gap-3 text-[#0056A6] hover:text-[#F15A24] transition-colors group"
      >
        <span className="w-8 h-8 rounded-lg bg-[#0056A6]/10 border border-[#0056A6]/20 flex items-center justify-center text-[#0056A6] group-hover:bg-[#F15A24] group-hover:border-[#F15A24] group-hover:text-white transition-all shrink-0">
          <Phone className="w-4 h-4" />
        </span>
        <span className="font-medium">{CONTACT_PHONE}</span>
      </a>

      {/* 4. Address */}
      <div className="flex items-start gap-3 pt-1 text-[#475569]">
        <span className="w-8 h-8 rounded-lg bg-[#0056A6]/10 border border-[#0056A6]/20 flex items-center justify-center text-[#0056A6] shrink-0">
          <MapPin className="w-4 h-4" />
        </span>
        <p className="leading-relaxed text-xs pt-1 text-[#475569]">
          Road Number 8, S. G. Barve Road,
          <br />
          Wagle Estate, Thane, Maharashtra
        </p>
      </div>

      <div className="pt-2">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#0056A6] hover:bg-[#F15A24] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-md shadow-blue-500/15 hover:shadow-orange-500/25 hover:-translate-y-0.5 group"
        >
          <span>Let's Talk</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

/* ================= FOOTER ================= */

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] text-[#475569] pt-16 pb-8 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ DESKTOP: 5-column structure ============ */}
        <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-[#E2E8F0]">
          {/* Column 1 — Brand (col-span-3) */}
          <div className="col-span-3 pr-2">
            <Link
              to="/"
              className="inline-block mb-4 hover:opacity-95 transition-opacity"
            >
              <img
                src={logoImg}
                alt="Silgate Digital"
                className="h-14 w-auto object-contain"
              />
            </Link>
            {/* <h4 className="text-[#0B2345] font-bold text-lg mb-2 tracking-tight">
              Silgate Digital
            </h4> */}
            <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-sm">
              Technology, marketing and creative solutions designed to help
              businesses build, strengthen and grow their digital presence.
            </p>
            <SocialIcons />
          </div>

          {/* Column 2 — Quick Links (col-span-2) */}
          <div className="col-span-2">
            <h4 className="text-[#0B2345] font-bold text-xs tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <LinkList links={quickLinks} />
          </div>

          {/* Column 3 — Services (col-span-2) */}
          <div className="col-span-2">
            <h4 className="text-[#0B2345] font-bold text-xs tracking-wider uppercase mb-4">
              Services
            </h4>
            <LinkList links={serviceLinks} />
          </div>

          {/* Column 4 — Industries (col-span-2) */}
          <div className="col-span-2">
            <h4 className="text-[#0B2345] font-bold text-xs tracking-wider uppercase mb-4">
              Industries
            </h4>
            <LinkList links={industryLinks} />
          </div>

          {/* Column 5 — Get in Touch (col-span-3) */}
          <div className="col-span-3">
            <h4 className="text-[#0B2345] font-bold text-xs tracking-wider uppercase mb-4">
              Get in Touch
            </h4>
            <GetInTouchContent />
          </div>
        </div>

        {/* ============ MOBILE: Brand → Accordions → Social ============ */}
        <div className="lg:hidden pb-8 border-b border-[#E2E8F0]">
          {/* Brand */}
          <div className="pt-2 pb-6">
            <Link
              to="/"
              className="inline-block mb-4 hover:opacity-95 transition-opacity"
            >
              <img
                src={logoImg}
                alt="Silgate Digital"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <h4 className="text-[#0B2345] font-bold text-lg mb-2">
              Silgate Digital
            </h4>
            <p className="text-sm text-[#475569] leading-relaxed mb-5">
              Technology, marketing and creative solutions designed to help
              businesses build, strengthen and grow their digital presence.
            </p>
            <SocialIcons />
          </div>

          {/* Accordion groups — uniform gaps via divide-y */}
          <div className="divide-y divide-[#E2E8F0]">
            <FooterAccordion title="Quick Links">
              <LinkList links={quickLinks} />
            </FooterAccordion>
            <FooterAccordion title="Services">
              <LinkList links={serviceLinks} />
            </FooterAccordion>
            <FooterAccordion title="Industries">
              <LinkList links={industryLinks} />
            </FooterAccordion>

            {/* Get in Touch — expanded by default */}
            <FooterAccordion title="Get in Touch" defaultOpen>
              <GetInTouchContent />
            </FooterAccordion>
          </div>
        </div>

        {/* ============ BOTTOM BAR ============ */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569]">
          <span>
            &copy; {new Date().getFullYear()} Silgate Digital. All Rights
            Reserved.
          </span>
          <div className="flex items-center gap-3">
            <Link
              to="/privacy-policy"
              className="text-[#0056A6] hover:text-[#F15A24] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#CBD5E1]">|</span>
            <Link
              to="/terms-conditions"
              className="text-[#0056A6] hover:text-[#F15A24] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
