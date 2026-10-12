import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ArrowRight,

} from "lucide-react";
import CareersCards from "../components/CareersCards";
import jobsData from "../data/jobsData";
import careerHeroVisual from "../assets/images/career-hero-visual.png";

export default function Careers() {
  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedWorkMode, setSelectedWorkMode] = useState("All Work Modes");
  const [selectedJobType, setSelectedJobType] = useState("All Types");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  // Extract unique departments and work modes from data
  const departments = useMemo(() => {
    const list = Array.from(new Set(jobsData.map((j) => j.category).filter(Boolean)));
    return ["All Departments", ...list,"SEO","UGC & Content Creation","Social Media Management"];
  }, []);

  const workModes = useMemo(() => {
    const list = Array.from(new Set(jobsData.map((j) => j.workMode).filter(Boolean)));
    return ["All Work Modes","Remote", ...list];
  }, []);

  const jobTypes = useMemo(() => {
    const list = Array.from(new Set(jobsData.map((j) => j.employmentType).filter(Boolean)));
    return ["All Types","Part-Time","Internship","Contract", ...list];
  }, []);

  // Filter Logic
  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      // Search matching (title, category, description, location)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.category.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        (job.description && job.description.toLowerCase().includes(q));

      // Department filter
      const matchesDept =
        selectedDepartment === "All Departments" ||
        job.category.toLowerCase() === selectedDepartment.toLowerCase();

      // Work Mode filter
      const matchesWorkMode =
        selectedWorkMode === "All Work Modes" ||
        job.workMode.toLowerCase() === selectedWorkMode.toLowerCase();

      // Job Type filter
      const matchesJobType =
        selectedJobType === "All Types" ||
        job.employmentType.toLowerCase() === selectedJobType.toLowerCase();

      return matchesSearch && matchesDept && matchesWorkMode && matchesJobType;
    });
  }, [searchQuery, selectedDepartment, selectedWorkMode, selectedJobType]);

  // Reset all filters
  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedDepartment("All Departments");
    setSelectedWorkMode("All Work Modes");
    setSelectedJobType("All Types");
    setCurrentPage(1);
  };

  // Scroll to opportunities section
  const handleScrollToOpportunities = () => {
    const element = document.getElementById("opportunities");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Open apply modal
  const handleOpenApplyModal = (job) => {
    setActiveJobForModal(job);
    setIsSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      experience: job.experience || "",
    }));
  };


  useEffect(() => {
    document.title = "Careers | Silgate Digital";
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F7FC] via-[#F8FAFC] to-[#FFFFFF] pt-10 sm:pt-16 pb-14 sm:pb-20 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              {/* Kicker */}
              <div className="inline-block text-xs sm:text-sm font-bold tracking-wider text-[#F36C3D] uppercase">
                CAREERS AT SILGATE DIGITAL
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Build Your Career.
                <br />
                Create Your Impact.
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Explore career opportunities at Silgate Digital and become part
                of a team working across technology, digital marketing,
                creative solutions and content. Discover opportunities to
                develop your skills, collaborate on meaningful projects and grow
                professionally.
              </p>

              {/* Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleScrollToOpportunities}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#F36C3D] hover:bg-[#d95627] text-white text-sm sm:text-base font-semibold shadow-sm hover:shadow transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Explore Open Positions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Graphic Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-none">
                <img
                  src={careerHeroVisual}
                  alt="Careers at Silgate Digital - Technology, Marketing & Creative"
                  className="w-full h-auto object-contain select-none"
                  priority="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXPLORE OPPORTUNITIES & FILTER SECTION
          ========================================================================= */}
      <section
        id="opportunities"
        className="pt-14 sm:pt-20 pb-8 bg-[#FAFBFD]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="text-xs sm:text-sm font-bold tracking-wider text-[#F36C3D] uppercase mb-2">
              EXPLORE OPPORTUNITIES
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Find Your Next Opportunity With Us
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Explore current career opportunities at Silgate Digital across
              technology, digital marketing, creative and content roles. Find a
              position that matches your skills, interests and professional
              aspirations.
            </p>
          </div>

          {/* Filter Container */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 sm:p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
              {/* Search Bar */}
              <div className="lg:col-span-4 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search job opportunities..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 focus:border-[#F36C3D] focus:ring-1 focus:ring-[#F36C3D] outline-none text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition-colors bg-white"
                />
              </div>

              {/* Department Dropdown */}
              <div className="lg:col-span-2">
                <select
                  value={selectedDepartment}
                  onChange={(e) => {
                    setSelectedDepartment(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 focus:border-[#F36C3D] focus:ring-1 focus:ring-[#F36C3D] outline-none text-xs sm:text-sm text-slate-700 bg-white cursor-pointer transition-colors"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              {/* Work Mode Dropdown */}
              <div className="lg:col-span-2">
                <select
                  value={selectedWorkMode}
                  onChange={(e) => {
                    setSelectedWorkMode(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 focus:border-[#F36C3D] focus:ring-1 focus:ring-[#F36C3D] outline-none text-xs sm:text-sm text-slate-700 bg-white cursor-pointer transition-colors"
                >
                  {workModes.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
              </div>

              {/* Job Type Dropdown */}
              <div className="lg:col-span-2">
                <select
                  value={selectedJobType}
                  onChange={(e) => {
                    setSelectedJobType(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 focus:border-[#F36C3D] focus:ring-1 focus:ring-[#F36C3D] outline-none text-xs sm:text-sm text-slate-700 bg-white cursor-pointer transition-colors"
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters Button */}
              <div className="lg:col-span-2">
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Job Listings using CareersCards component */}
          <div className="space-y-4 bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <CareersCards
                  key={job.id}
                  job={job}
                  onApply={handleOpenApplyModal}
                />
              ))
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <div className="max-w-md mx-auto space-y-3">
                  <p className="text-base font-semibold text-slate-800">
                    No open positions found matching your criteria.
                  </p>
                  <p className="text-xs text-slate-500">
                    Try adjusting your search filters or clear them to view all
                    available roles.
                  </p>
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F36C3D] text-white text-xs font-semibold hover:bg-[#d95627] transition-colors cursor-pointer mt-2"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset All Filters</span>
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
              PAGINATION
              ========================================================================= */}
            <div className="mt-8 flex items-center justify-center gap-1.5 sm:gap-2">
              {/* Previous */}
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className={`w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 transition-colors ${currentPage <= 1
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
                  }`}
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page 1 (Active) */}
              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className={`w-8 h-8 rounded-md font-semibold text-xs sm:text-sm flex items-center justify-center transition-colors cursor-pointer ${currentPage === 1
                    ? "bg-[#F36C3D] text-white shadow-sm"
                    : "border border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
              >
                1
              </button>

              {/* Page 2 */}
              <button
                type="button"
                onClick={() => setCurrentPage(2)}
                className={`w-8 h-8 rounded-md font-semibold text-xs sm:text-sm flex items-center justify-center transition-colors cursor-pointer ${currentPage === 2
                    ? "bg-[#F36C3D] text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                  }`}
              >
                2
              </button>

              {/* Page 3 */}
              <button
                type="button"
                onClick={() => setCurrentPage(3)}
                className={`w-8 h-8 rounded-md font-semibold text-xs sm:text-sm flex items-center justify-center transition-colors cursor-pointer ${currentPage === 3
                    ? "bg-[#F36C3D] text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                  }`}
              >
                3
              </button>

              {/* Ellipsis */}
              <span className="w-8 h-8 flex items-center justify-center text-xs text-slate-400 select-none">
                ...
              </span>

              {/* Page 10 */}
              <button
                type="button"
                onClick={() => setCurrentPage(10)}
                className={`w-8 h-8 rounded-md font-semibold text-xs sm:text-sm flex items-center justify-center transition-colors cursor-pointer ${currentPage === 10
                    ? "bg-[#F36C3D] text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                  }`}
              >
                10
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(10, p + 1))}
                className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>


        </div>
      </section>


    </div>
  );
}
