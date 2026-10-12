import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

export default function BlogCard({
  title,
  slug,
  excerpt,
  image,
  date,
  readTime,
  category,
  variant = "standard", // "standard" | "featured-main" | "featured-sub"
}) {
  const isMainFeatured = variant === "featured-main";

  return (
    <article className="group bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between h-full">
      <Link to={slug ? `/blog/${slug}` : "/blogs"} className="block flex-1 flex flex-col">
        {/* Thumbnail Image Container */}
        <div
          className={`relative w-full overflow-hidden bg-slate-100 ${
            isMainFeatured ? "aspect-[16/9] sm:aspect-[16/10]" : "aspect-[16/10]"
          }`}
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#091E3A] to-[#00529B] flex items-center justify-center p-6 text-white text-center font-bold text-sm">
              Silgate Insights
            </div>
          )}

          {/* Category Badge on image */}
          {category && (
            <div className="absolute top-3 left-3">
              <span className="inline-block bg-[#F36C3D] text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
                {category}
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3
              className={`font-bold text-slate-900 group-hover:text-[#F36C3D] transition-colors leading-snug mb-2 ${
                isMainFeatured ? "text-base sm:text-lg" : "text-sm sm:text-[15px] line-clamp-2"
              }`}
            >
              {title}
            </h3>

            {/* Excerpt if present and in main featured */}
            {isMainFeatured && excerpt && (
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3">
                {excerpt}
              </p>
            )}
          </div>

          {/* Meta Info (Date & Read Time) */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs text-slate-500 pt-2 border-t border-slate-100 mt-auto">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{date}</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{readTime}</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
