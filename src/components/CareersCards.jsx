import React from "react";
import { MapPin, Briefcase, Clock, Laptop, Building2, ArrowRight } from "lucide-react";

const CareersCards = ({ job, onApply }) => {
  if (!job) return null;

  // Choose icon based on workMode
  const isRemoteOrHybrid = job.workMode?.toLowerCase().includes("hybrid") || job.workMode?.toLowerCase().includes("remote");

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 p-5 sm:p-6 group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Left Information Section */}
        <div className="space-y-2 flex-1">
          {/* Category */}
          <div className="text-xs font-bold uppercase tracking-wider text-[#F36C3D]">
            {job.category}
          </div>

          {/* Job Title */}
          <h3 className="text-lg sm:text-xl font-bold text-Darkblue-900 group-hover:text-[#F36C3D] transition-colors">
            {job.title}
          </h3>

          {/* Meta Info Row */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5 text-xs text-slate-600">
            {job.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{job.location}</span>
              </span>
            )}
            {job.experience && (
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{job.experience}</span>
              </span>
            )}
            {job.jobType && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{job.jobType}</span>
              </span>
            )}
            {job.workMode && (
              <span className="inline-flex items-center gap-1.5">
                {isRemoteOrHybrid ? (
                  <Laptop className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                ) : (
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                )}
                <span>{job.workMode}</span>
              </span>
            )}
          </div>

          {/* Description */}
          {job.description && (
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1 max-w-3xl">
              {job.description}
            </p>
          )}
        </div>

        {/* Right CTA Button */}
        <div className="shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={() => onApply && onApply(job)}
            className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#F36C3D] hover:bg-[#e05a2b] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            <span>View & Apply</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersCards;