import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
} from "lucide-react";

// Section Images
import heroVisual from "../assets/images/case_studies_hero_visual.jpg";
import csWebDevImg from "../assets/images/cs_web_dev.jpg";
import csSocialImg from "../assets/images/cs_social_media.jpg";
import csSeoImg from "../assets/images/cs_seo_growth.jpg";
import csDmImg from "../assets/images/cs_digital_marketing.jpg";
import csCreativeImg from "../assets/images/cs_creative_design.jpg";
import csUgcImg from "../assets/images/cs_ugc_content.jpg";
import csRevampImg from "../assets/images/cs_web_revamp.jpg";

// Category Filter Definitions
const CATEGORIES = [
  "All",
  "Web Development",
  "SEO",
  "Social Media Management",
  "Digital Marketing",
  "Creative & Graphic Design",
  "UGC & Content Creation",
];

// All Case Studies Data directly in this component
const CASE_STUDIES = [
  {
    id: "cs-01",
    title: "Building a Scalable Website for a Growing Business",
    category: "Web Development",
    image: csWebDevImg,
    shortDescription:
      "A modern, user-friendly website designed to enhance brand presence and improve user engagement.",
  },
  {
    id: "cs-02",
    title: "Strengthening Brand Presence Through Social Media",
    category: "Social Media Management",
    image: csSocialImg,
    shortDescription:
      "A strategic social media approach to increase engagement and build a stronger online community.",
  },
  {
    id: "cs-03",
    title: "Driving Organic Growth with Strategic SEO",
    category: "SEO",
    image: csSeoImg,
    shortDescription:
      "A focused SEO strategy to improve search visibility and attract the right audience.",
  },
  // {
  //   id: "cs-04",
  //   title: "Result-Driven Digital Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: csDmImg,
  //   shortDescription:
  //     "A comprehensive multi-channel digital marketing campaign driving high-intent customer acquisition.",
  // },
  // {
  //   id: "cs-05",
  //   title: "Creative Design Solutions for Brand Communication",
  //   category: "Creative & Graphic Design",
  //   image: csCreativeImg,
  //   shortDescription:
  //     "Crafting impactful visual identity and communication design for enhanced brand recall.",
  // },
  // {
  //   id: "cs-06",
  //   title: "Engaging Content to Build Brand Awareness",
  //   category: "UGC & Content Creation",
  //   image: csUgcImg,
  //   shortDescription:
  //     "Authentic creator-led video content and social storytelling to expand reach and deepen audience trust.",
  // },
  // {
  //   id: "cs-07",
  //   title: "Website Revamp for Better User Experience",
  //   category: "Web Development",
  //   image: csRevampImg,
  //   shortDescription:
  //     "Re-architecting user experience, design hierarchy, and performance to accelerate lead generation.",
  // },
];

const MORE_CASE_STUDIES = [
  {
    id: "more-01",
    title: "Result-Driven Digital Marketing Campaign",
    category: "Digital Marketing",
    image: csDmImg,
  },
  {
    id: "more-02",
    title: "Creative Design Solutions for Brand Communication",
    category: "Creative & Graphic Design",
    image: csCreativeImg,
  },
  {
    id: "more-03",
    title: "Engaging Content to Build Brand Awareness",
    category: "UGC & Content Creation",
    image: csUgcImg,
  },
  {
    id: "more-04",
    title: "Website Revamp for Better User Experience",
    category: "Web Development",
    image: csRevampImg,
  },
];

const ITEMS_PER_PAGE = 6;

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.title = "Case Studies | Silgate Digital";
    window.scrollTo(0, 0);
  }, []);

  // Filter by category
  const filteredCaseStudies = useMemo(() => {
    if (selectedCategory === "All") {
      return CASE_STUDIES;
    }
    return CASE_STUDIES.filter((cs) => cs.category === selectedCategory);
  }, [selectedCategory]);

  // Handle category change (resets to page 1)
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  // Pagination calculation
  const totalItems = filteredCaseStudies.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentSection2Items = useMemo(() => {
    return filteredCaseStudies.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCaseStudies, startIndex]);

  // Smooth scroll helper
  const scrollToSection2 = () => {
    const listingEl = document.getElementById("case-studies-listing");
    if (listingEl) {
      listingEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 1 — HERO BANNER                                                   */}
        {/* ========================================================================= */}
        <section
          id="hero"
          className="relative bg-gradient-to-b from-[#F2F7FC] via-[#F8FAFC] to-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column (Desktop 50%) */}
              <div className="lg:col-span-6 flex flex-col items-start z-10">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="text-[#F36C3D] font-bold text-xs uppercase tracking-[0.18em]">
                    OUR WORK & IMPACT
                  </span>
                  <div className="h-[2px] w-12 bg-slate-300 rounded-full" />
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold text-[#07172C] leading-[1.12] tracking-tight mb-4 sm:mb-5">
                  Real Projects. Practical Solutions. Meaningful Impact.
                </h1>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mb-8 sm:mb-9">
                  Explore how Si lgate Digital approaches business challenges
                  through technology, digital marketing, creative solutions and
                  content. Discover the thinking, strategies and solutions
                  behind our work across different industries.
                </p>

                <button
                  type="button"
                  id="hero-explore-cta"
                  onClick={scrollToSection2}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-[#F36C3D] hover:bg-[#D95627] text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F36C3D]/60 cursor-pointer"
                >
                  <span>Explore Our Case Studies</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Right Column (Desktop 50% Abstract Showcase Visual) */}
              <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[540px]">
                  {/* Ambient Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#00529B]/15 via-[#F36C3D]/10 to-transparent rounded-3xl blur-2xl opacity-70 pointer-events-none" />

                  {/* Clean Visual Container */}
                  <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border border-slate-200/90 group">
                    <img
                      src={heroVisual}
                      alt="Silgate Digital Project Showcase and Modern Digital Solutions"
                      className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07172C]/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2 — CASE STUDIES LISTING                                          */}
        {/* ========================================================================= */}
        <section
          id="case-studies-listing"
          className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 scroll-mt-6"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mb-8 sm:mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#F36C3D] font-bold text-xs uppercase tracking-[0.18em]">
                  CASE STUDIES
                </span>
                <div className="h-[2px] w-12 bg-slate-200 rounded-full" />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07172C] tracking-tight">
                  Our Work in Action
                </h2>
                <div className="hidden sm:block h-[2px] w-16 bg-slate-300 rounded-full" />
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Explore a selection of our projects across technology,
                marketing, creative and content solutions.
              </p>
            </div>

            {/* Category Filter: Desktop Pill Buttons & Mobile Custom Dropdown */}
            <div className="mb-10 sm:mb-12">
              {/* Mobile View: Dropdown select matching mobile reference mockup */}
              <div className="sm:hidden relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  aria-label="Filter case studies by category"
                  className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-[#07172C] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#F36C3D]/50 focus:border-[#F36C3D] pr-10"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Desktop View: Horizontal rounded pill buttons */}
              <div className="hidden sm:flex items-center gap-2.5 flex-wrap">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleCategoryChange(cat)}
                      className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F36C3D]/60 ${
                        isActive
                          ? "bg-[#F36C3D] text-white shadow-sm"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-[#00529B] hover:bg-slate-50/50"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Case Studies Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
            {currentSection2Items.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentSection2Items.map((project) => (
                    <article
                      key={project.id}
                      className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                    >
                      {/* Featured Image (16:9 Aspect Ratio) */}
                      <Link
                        to="/contact#enquiry-section"
                        className="relative block w-full aspect-[16/9] overflow-hidden bg-slate-100"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                      </Link>

                      {/* Card Content */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Service Category */}
                          <div className="mb-3.5">
                            <span className="inline-block px-3 py-1 rounded-full bg-[#F36C3D] text-white text-[11px] font-bold tracking-wide shadow-xs">
                              {project.category}
                            </span>
                          </div>

                          {/* Project Title */}
                          <h3 className="text-lg sm:text-xl font-bold text-[#07172C] group-hover:text-[#00529B] transition-colors leading-snug mb-3">
                            <Link to="/contact#enquiry-section">
                              {project.title}
                            </Link>
                          </h3>

                          {/* Short Description */}
                          <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            {project.shortDescription}
                          </p>
                        </div>

                        {/* Read Case Study CTA */}
                        <div className="pt-4 border-t border-slate-100">
                          <Link
                            to="/contact#enquiry-section"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#0056A6] group-hover:text-[#F36C3D] transition-colors"
                          >
                            <span>Read Case Study</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Mobile Carousel / Pagination Dots matching Reference Mockup */}
                <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
                  {[0, 1, 2, 3].map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === 0 ? "w-6 bg-[#F36C3D]" : "w-2 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </>
            ) : (
              /* Empty State */
              <div className="py-16 sm:py-20 px-6 text-center max-w-xl mx-auto bg-slate-50/80 rounded-2xl border border-slate-200">
                <div className="w-14 h-14 rounded-full bg-[#00529B]/10 text-[#00529B] flex items-center justify-center mx-auto mb-4">
                  <FolderOpen className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#07172C] mb-3">
                  Case Studies Coming Soon
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We're preparing examples of our work across technology,
                  marketing, creative and content solutions. Check back soon to
                  explore our projects.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 sm:mt-16 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous Page"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center border text-sm font-semibold transition-colors ${
                    currentPage === 1
                      ? "border-slate-200 text-slate-300 cursor-not-allowed"
                      : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNum = idx + 1;
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#07172C] text-white shadow-xs"
                          : "border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  aria-label="Next Page"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center border text-sm font-semibold transition-colors ${
                    currentPage === totalPages
                      ? "border-slate-200 text-slate-300 cursor-not-allowed"
                      : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3 — EXPLORE MORE CASE STUDIES                                     */}
        {/* ========================================================================= */}
        <section
          id="explore-more"
          className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with Top-Right CTA on Desktop & Mobile */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07172C] tracking-tight">
                    More Case Studies
                  </h2>
                  <div className="h-[2px] w-12 bg-slate-300 rounded-full" />
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Discover more of our work across different services and
                  industries.
                </p>
              </div>

              {/* View All CTA */}
              <button
                type="button"
                onClick={scrollToSection2}
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#0056A6] hover:text-[#F36C3D] transition-colors cursor-pointer self-start md:self-end shrink-0"
              >
                <span className="hidden sm:inline">View All Case Studies</span>
                <span className="sm:hidden">View All</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Desktop: 4 Cards in One Horizontal Row */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MORE_CASE_STUDIES.map((project) => (
                <Link
                  key={project.id}
                  to="/contact#enquiry-section"
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  {/* Featured Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start">
                    {/* Category Pill */}
                    <span className="inline-block self-start px-2.5 py-1 rounded-full bg-[#F36C3D] text-white text-[10px] font-bold tracking-wide mb-2.5 shadow-xs">
                      {project.category}
                    </span>

                    {/* Project Title */}
                    <h3 className="text-sm sm:text-base font-bold text-[#07172C] group-hover:text-[#00529B] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile View: Compact Horizontal Card matching reference mockup */}
            <div className="sm:hidden">
              {MORE_CASE_STUDIES.slice(0, 1).map((project) => (
                <Link
                  key={project.id}
                  to="/contact#enquiry-section"
                  className="flex items-center gap-3.5 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow group"
                >
                  <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[#F36C3D] text-white text-[9px] font-bold mb-1">
                      {project.category}
                    </span>
                    <h4 className="text-xs font-bold text-[#07172C] group-hover:text-[#00529B] leading-tight line-clamp-2">
                      {project.title}
                    </h4>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-slate-500 group-hover:text-[#F36C3D] group-hover:border-[#F36C3D]">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4 — FINAL CTA                                                     */}
        {/* ========================================================================= */}
        <section
          id="final-cta"
          className="relative bg-[#07172C] text-white py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
          {/* Subtle Ambient Digital Line & Gradient Accents */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#00529B]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#F36C3D]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative curved SVG lines matching mockup */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-100 350 C 300 150, 700 450, 1540 200"
                stroke="url(#cta-line-grad)"
                strokeWidth="1.5"
              />
              <path
                d="M-50 200 C 450 350, 950 50, 1500 250"
                stroke="url(#cta-line-grad)"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient
                  id="cta-line-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00529B" />
                  <stop offset="50%" stopColor="#F36C3D" />
                  <stop offset="100%" stopColor="#00529B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-[#F36C3D] font-bold text-xs uppercase tracking-[0.2em] mb-4 inline-block">
              LET'S CONNECT
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-5">
              Have a Digital Requirement? Let's Talk About It.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-9 sm:mb-10">
              Exploring new ideas is just the beginning. Whether you're looking
              to strengthen your online presence, improve digital visibility or
              explore technology, creative and content solutions, we're here to
              understand your requirement and discuss the right approach for
              your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <Link
                to="/contact#enquiry-section"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#F36C3D] hover:bg-[#D95627] text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-transparent border border-white/25 hover:border-white/50 hover:bg-white/5 text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-200"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5 — Global Footer is rendered globally via AppContent.jsx */}
      </main>
    </div>
  );
}
