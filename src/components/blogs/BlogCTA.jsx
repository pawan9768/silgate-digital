import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A192F] py-14 sm:py-20 text-white">
      {/* Decorative subtle wavy lines / background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="#00529B"
            strokeWidth="1.5"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192"
          />
          <path
            fill="none"
            stroke="#F36C3D"
            strokeWidth="1"
            d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,229.3C672,245,768,235,864,208C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Kicker */}
        <div className="text-xs sm:text-sm font-bold tracking-wider text-[#F36C3D] uppercase mb-2">
          LET'S CONNECT
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
          Have a Digital Requirement? Let's Talk About It.
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          Exploring new ideas is just the beginning. Whether you're looking to
          strengthen your online presence, improve digital visibility or
          explore technology, marketing, creative and content solutions, we're
          here to understand your requirements and discuss the right approach for
          your business.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F36C3D] hover:bg-[#d95627] text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-[0.98]"
          >
            <span>Discuss Your Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 hover:border-white text-white hover:bg-white/10 text-xs sm:text-sm font-medium transition-all active:scale-[0.98]"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
