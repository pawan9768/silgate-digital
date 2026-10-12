import React, { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight, SlidersHorizontal, RotateCcw } from "lucide-react";
import BlogCard from "./BlogCard";
import { BLOG_CATEGORIES } from "../../data/blogsData";

export default function ExploreBlogs({ posts = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("latest"); // "latest" | "oldest" | "title"
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter and Sort Logic
  const filteredAndSortedPosts = useMemo(() => {
    let result = posts.filter((post) => {
      // Category match
      const matchesCategory =
        selectedCategory === "All" ||
        post.category?.toLowerCase() === selectedCategory.toLowerCase();

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.category?.toLowerCase().includes(q) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });

    // Sorting
    result = [...result].sort((a, b) => {
      if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      }
      // Date parsing fallback
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sortOrder === "oldest") {
        return dateA - dateB;
      }
      return dateB - dateA; // latest by default
    });

    return result;
  }, [posts, selectedCategory, searchQuery, sortOrder]);

  // Pagination slice
  const totalPages = Math.max(1, Math.ceil(filteredAndSortedPosts.length / itemsPerPage));
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedPosts.slice(start, start + itemsPerPage);
  }, [filteredAndSortedPosts, currentPage, itemsPerPage]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSortOrder("latest");
    setCurrentPage(1);
  };

  return (
    <section id="explore-blogs" className="py-12 sm:py-16 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Search and Sort */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-6 sm:mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#F36C3D] mb-1.5">
              EXPLORE OUR BLOGS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Discover Insights That Matter to Your Business</span>
              <span className="text-slate-400 font-light">—</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
              Explore articles, ideas and practical perspectives across our digital services. Browse topics that interest you and discover insights relevant to your business needs.
            </p>
          </div>

          {/* Search Bar & Sort Dropdown */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 lg:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 bg-white placeholder-slate-400 text-slate-800 outline-none focus:border-[#F36C3D] focus:ring-1 focus:ring-[#F36C3D] transition-colors"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative shrink-0">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="pl-3 pr-8 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 bg-white text-slate-700 outline-none focus:border-[#F36C3D] cursor-pointer appearance-none"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
              </select>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="relative mb-8 sm:mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {BLOG_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#F36C3D] text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200/90 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Cards Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {currentPosts.map((post) => (
              <div key={post.slug} className="h-full">
                <BlogCard {...post} variant="standard" />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <div className="max-w-md mx-auto space-y-3">
              <p className="text-base font-semibold text-slate-800">
                No articles found matching your criteria.
              </p>
              <p className="text-xs text-slate-500">
                Try searching with different keywords or reset your filters.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F36C3D] text-white text-xs font-semibold hover:bg-[#d95627] transition-colors cursor-pointer mt-2"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            PAGINATION
            ========================================================================= */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-1.5 sm:gap-2">
          {/* Previous Button */}
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className={`w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 transition-colors ${
              currentPage <= 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Page numbers [1, 2, 3, 4, 5] matching screenshot */}
          {[1, 2, 3, 4, 5].map((pageNum) => {
            const isActive = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                type="button"
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 rounded-md font-semibold text-xs sm:text-sm flex items-center justify-center transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#F36C3D] text-white shadow-sm"
                    : "border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
