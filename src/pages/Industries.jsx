import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Target,
  Layers,
  TrendingUp,
} from "lucide-react";

// Industry Images
import bfsiImg from "../assets/images/industries/bfsi.jpg";
import fintechImg from "../assets/images/industries/fintech.jpg";
import insuranceImg from "../assets/images/industries/insurance.jpg";
import realestateImg from "../assets/images/industries/realestate.jpg";
import educationImg from "../assets/images/industries/education.jpg";
import healthcareImg from "../assets/images/industries/healthcare.jpg";
import retailImg from "../assets/images/industries/retail.jpg";
import travelImg from "../assets/images/industries/travel.jpg";

// Hero Collage Images
import officeCollabImg from "../assets/images/industries/collage_collab.jpg";
import teamSmileImg from "../assets/images/industries/collage_team.jpg";
import citySkylineImg from "../assets/images/industries/collage_skyline.jpg";

export default function Industries() {
  const approaches = [
    {
      title: "Understand Industry Needs",
      icon: Cpu,
    },
    {
      title: "Create Relevant Digital Strategies",
      icon: Target,
    },
    {
      title: "Deliver Tailored Solutions",
      icon: Layers,
    },
    {
      title: "Support Long-Term Growth",
      icon: TrendingUp,
    },
  ];

  const industriesList = [
    {
      id: "bfsi",
      label: "BFSI",
      heading: "Digital Solutions for a Changing Financial Landscape",
      description:
        "Helping BFSI businesses strengthen their digital presence, improve customer engagement and support business growth through tailored technology, marketing and creative solutions.",
      link: "/digital-marketing-for-financial-services",
      image: bfsiImg,
      alt: "BFSI Industry Digital Solutions",
    },
    {
      id: "fintech",
      label: "FINTECH",
      heading: "Digital Support for Innovative and Growing Fintech Businesses",
      description:
        "Building digital solutions for fintech companies to enhance visibility, engage users and support growth in a competitive and fast-evolving market.",
      link: "/services/web-application-development",
      image: fintechImg,
      alt: "Fintech Digital Support",
    },
    {
      id: "insurance",
      label: "INSURANCE",
      heading: "Digital Solutions for a More Connected Insurance Experience",
      description:
        "Helping insurance businesses build stronger digital engagement, improve customer communication and create more accessible and user-friendly experiences.",
      link: "/digital-marketing-for-financial-services",
      image: insuranceImg,
      alt: "Insurance Connected Experience",
    },
    {
      id: "real-estate",
      label: "REAL ESTATE",
      heading: "Digital Support for a Dynamic Real Estate Market",
      description:
        "Creating digital solutions that help real estate businesses generate visibility, engage potential buyers and showcase their projects effectively.",
      link: "/digital-marketing-agency-for-real-estate",
      image: realestateImg,
      alt: "Real Estate Digital Marketing",
    },
    {
      id: "education",
      label: "EDUCATION",
      heading: "Digital Solutions for Modern Learning Ecosystems",
      description:
        "Supporting educational institutions and edtech businesses with digital solutions to improve visibility, engagement and learner outreach.",
      link: "/digital-marketing-agency-for-education-industry",
      image: educationImg,
      alt: "Education Digital Solutions",
    },
    {
      id: "healthcare",
      label: "HEALTHCARE",
      heading: "Digital Support for a More Connected Healthcare Experience",
      description:
        "Helping healthcare businesses improve digital presence, communicate services effectively and create better patient engagement.",
      link: "/digital-marketing-services-for-healthcare",
      image: healthcareImg,
      alt: "Healthcare Connected Digital Support",
    },
    {
      id: "retail-ecommerce",
      label: "RETAIL & E-COMMERCE",
      heading: "Digital Solutions for a Connected Retail Experience",
      description:
        "Helping retail and e-commerce businesses improve visibility, engage customers and drive growth through effective digital strategies.",
      link: "/digital-marketing-for-ecommerce",
      image: retailImg,
      alt: "Retail and E-commerce Digital Solutions",
    },
    {
      id: "travel-hospitality",
      label: "TRAVEL & HOSPITALITY",
      heading: "Digital Support for a More Engaging Travel Experience",
      description:
        "Creating digital solutions that help travel and hospitality businesses attract, engage and convert their audience across digital channels.",
      link: "/digital-marketing-for-travel-tourism",
      image: travelImg,
      alt: "Travel and Hospitality Digital Solutions",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#F36C3D]/20 selection:text-[#F36C3D]">
      <main className="flex-1">
        {/* =========================================================
            1. INDUSTRIES HERO
        ========================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F6FC] via-[#F8FAFC] to-white pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
                <div className="inline-flex items-center">
                  <span className="text-xs md:text-sm font-bold tracking-widest text-[#F36C3D] uppercase">
                    INDUSTRIES
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#091E3A] leading-[1.15] tracking-tight">
                  Digital Solutions <br className="hidden sm:inline" />
                  for a Wide Range <br className="hidden sm:inline" />
                  of Industries
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We work with businesses across different industries, providing
                  digital solutions that are aligned with their goals, audience
                  and market requirements.
                </p>
              </div>

              {/* Right Column: Industry Collage */}
              <div className="lg:col-span-6 relative">
                {/* Decorative background shape */}
                <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-100/70 rounded-full blur-3xl pointer-events-none -z-0" />
                <div className="absolute -bottom-8 -left-8 w-60 h-60 bg-orange-100/60 rounded-full blur-2xl pointer-events-none -z-0" />

                {/* Curved blue backdrop card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#EBF3FB]/80 to-[#F0F6FC]/40 rounded-[2.5rem] -z-0 transform rotate-1 scale-105" />

                <div className="relative z-10 grid grid-cols-12 gap-3 sm:gap-4 p-2 sm:p-4">
                  {/* Left Column (5 cols) */}
                  <div className="col-span-5 flex flex-col gap-3 sm:gap-4">
                    {/* Arch Skyscraper */}
                    <div className="h-[180px] sm:h-[220px] md:h-[240px] rounded-t-[2.5rem] rounded-b-2xl overflow-hidden shadow-sm group">
                      <img
                        src={bfsiImg}
                        alt="Modern corporate financial towers"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                    </div>

                    {/* Team in corridor */}
                    <div className="h-[110px] sm:h-[130px] md:h-[140px] rounded-2xl overflow-hidden shadow-sm group">
                      <img
                        src={teamSmileImg}
                        alt="Corporate business team"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* Right Column (7 cols) */}
                  <div className="col-span-7 flex flex-col gap-3 sm:gap-4">
                    {/* Top Right: Collaboration */}
                    <div className="h-[110px] sm:h-[130px] md:h-[140px] rounded-2xl overflow-hidden shadow-sm group">
                      <img
                        src={officeCollabImg}
                        alt="Professional business consultants collaborating"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                    </div>

                    {/* Middle Right: Travel Resort */}
                    <div className="h-[100px] sm:h-[120px] md:h-[130px] rounded-2xl overflow-hidden shadow-sm group">
                      <img
                        src={travelImg}
                        alt="Travel and resort destination"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                    </div>

                    {/* Bottom Right: Skyline */}
                    <div className="h-[80px] sm:h-[95px] md:h-[105px] rounded-2xl overflow-hidden shadow-sm group">
                      <img
                        src={citySkylineImg}
                        alt="Modern urban infrastructure"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. OUR INDUSTRY FOCUS / INDUSTRIES OVERVIEW
        ========================================================== */}
        <section className="py-14 md:py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Side: Title & Description */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs md:text-sm font-bold tracking-widest text-[#F36C3D] uppercase">
                  OUR INDUSTRY FOCUS
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#091E3A] leading-tight">
                  Different Industries. <br />
                  A Common Digital Approach.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Every industry has unique opportunities and challenges. We
                  combine industry understanding with digital expertise to create
                  solutions that are practical, relevant and aligned with
                  specific business objectives.
                </p>
              </div>

              {/* Right Side: 4 Approach Cards */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
                {approaches.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#F8FAFC] hover:bg-[#F0F6FC] rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-start border border-slate-100 hover:border-blue-200 transition-all duration-300 group shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white text-[#00529B] group-hover:text-[#F36C3D] shadow-sm flex items-center justify-center mb-4 transition-colors">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#091E3A] leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3–10. EIGHT INDIVIDUAL INDUSTRY SECTIONS
        ========================================================== */}
        <section className="py-6 sm:py-8 md:py-14 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 md:gap-0 md:divide-y md:divide-slate-200/70">
              {industriesList.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="md:py-7 lg:py-8 md:first:pt-0 md:last:pb-0"
                >
                  {/* Desktop / Tablet Layout */}
                  <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left: Image */}
                    <div className="md:col-span-5 lg:col-span-4">
                      <div className="relative rounded-2xl overflow-hidden shadow-xs aspect-[16/10] bg-slate-100 group border border-slate-200/60">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Middle: Content */}
                    <div className="md:col-span-5 lg:col-span-6 space-y-2">
                      <span className="text-xs font-bold tracking-wider text-[#F36C3D] uppercase">
                        {item.label}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-[#091E3A] leading-snug">
                        {item.heading}
                      </h3>
                      <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Right: Learn More CTA */}
                    <div className="md:col-span-2 lg:col-span-2 flex justify-end">
                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F36C3D] hover:text-[#D95627] group transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Compact Card Layout (Continuous compact list with minimal uniform gap) */}
                  <div className="md:hidden">
                    <Link
                      to={item.link}
                      className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs active:scale-[0.99] transition-transform"
                    >
                      {/* Thumbnail */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0 pr-1">
                        <span className="block text-[11px] font-bold text-[#F36C3D] uppercase tracking-wide">
                          {item.label}
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-[#091E3A] leading-snug line-clamp-2 mt-0.5">
                          {item.heading}
                        </h3>
                      </div>

                      {/* Right Navigation Arrow */}
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 shrink-0">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            11. DISCUSS YOUR DIGITAL REQUIREMENT (CTA SECTION)
        ========================================================== */}
        <section className="relative overflow-hidden bg-[#07172C] text-white py-16 md:py-24">
          {/* Subtle wave gradient background */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-bl from-blue-500 to-transparent rounded-full blur-3xl" />
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-[#00529B] to-transparent rounded-full blur-3xl" />
          </div>

          {/* Technology wave line accent */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#F36C3D] uppercase">
              LET'S WORK TOGETHER
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white leading-tight">
              Have a Digital Requirement? <br />
              Let's Find the Right Solution.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether you need support for a specific industry or across
              multiple areas, tell us what you're looking to achieve. Our team
              will understand your requirements and explore the right way
              forward for your business.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F36C3D] hover:bg-[#D95627] text-white font-semibold text-sm rounded-xl shadow-lg shadow-orange-950/30 transition-all duration-200"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent hover:bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/40 hover:border-white transition-all duration-200"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
