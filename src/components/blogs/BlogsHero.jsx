import React from "react";
import { ArrowRight } from "lucide-react";
import blogHeroVisual from "../../assets/images/blog-hero-visual.png";

export default function BlogsHero({ onExploreClick }) {
  const handleScroll = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById("featured-blogs");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F7FC] via-[#F8FAFC] to-[#FFFFFF] pt-10 sm:pt-16 pb-14 sm:pb-20 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Kicker & CTA */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            {/* Kicker */}
            <div className="inline-block text-xs sm:text-sm font-bold tracking-wider text-[#F36C3D] uppercase">
              INSIGHTS & IDEAS
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Insights, Ideas & 
              <br />
             Perspectives on the Digital World
              <br />
              <span className="text-[#F36C3D]">Stronger Digital Future</span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Explore insights, practical ideas and emerging trends across technology, digital marketing, 
              creative solutions and content. Discover 
              perspectives designed to help businesses understand the evolving digital landscape and make informed decisions.
            </p>

            {/* Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleScroll}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#F36C3D] hover:bg-[#d95627] text-white text-sm sm:text-base font-semibold shadow-sm hover:shadow transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Our Blogs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Graphic Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-none">
              <img
                src={blogHeroVisual}
                alt="Digital Insights for Growing Businesses"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
