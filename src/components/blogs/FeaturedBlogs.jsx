import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";

export default function FeaturedBlogs({ posts = [], onViewAllClick }) {
  const [mobileIndex, setMobileIndex] = useState(0);

  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);
  if (featuredPosts.length === 0) return null;

  const handleViewAll = () => {
    if (onViewAllClick) {
      onViewAllClick();
    } else {
      const el = document.getElementById("explore-blogs");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="featured-blogs" className="py-12 sm:py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#F36C3D] mb-1.5">
              FEATURED INSIGHTS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Ideas & Insights Worth Exploring</span>
              <span className="text-slate-400 font-light">—</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-xl">
              Discover selected articles covering digital strategies, technology, marketing, 
              creative solutions and emerging trends that matter to modern businesses.
            </p>
          </div>

          <button
            type="button"
            onClick={handleViewAll}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00529B] hover:text-[#F36C3D] transition-colors cursor-pointer self-start sm:self-end"
          >
            <span>View All Blogs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop 3-Card Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 items-stretch">
          {featuredPosts.map((post, idx) => (
            <div key={post.slug || idx} className="h-full">
              <BlogCard
                {...post}
                variant={idx === 0 ? "featured-main" : "standard"}
              />
            </div>
          ))}
        </div>

        {/* Mobile View with Carousel Dots */}
        <div className="md:hidden">
          <div className="relative">
            <BlogCard
              {...featuredPosts[mobileIndex]}
              variant={mobileIndex === 0 ? "featured-main" : "standard"}
            />
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {featuredPosts.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setMobileIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 transition-all rounded-full cursor-pointer ${mobileIndex === i
                    ? "w-6 bg-[#F36C3D]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
