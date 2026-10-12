import React, { useEffect } from "react";
import BlogsHero from "../components/blogs/BlogsHero";
import FeaturedBlogs from "../components/blogs/FeaturedBlogs";
import ExploreBlogs from "../components/blogs/ExploreBlogs";
import BlogCTA from "../components/blogs/BlogCTA";
import { BLOG_POSTS } from "../data/blogsData";

export default function Blogs() {
  useEffect(() => {
    document.title = "Blogs & Insights | Silgate Digital";
  }, []);

  const handleScrollToFeatured = () => {
    const el = document.getElementById("featured-blogs");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToExplore = () => {
    const el = document.getElementById("explore-blogs");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Section 1: Blogs Hero */}
      <BlogsHero onExploreClick={handleScrollToFeatured} />

      {/* Section 2: Featured Blogs */}
      <FeaturedBlogs
        posts={BLOG_POSTS}
        onViewAllClick={handleScrollToExplore}
      />

      {/* Section 3: Explore Blogs */}
      <ExploreBlogs posts={BLOG_POSTS} />

      {/* Section 4: Final CTA */}
      <BlogCTA />
    </div>
  );
}
