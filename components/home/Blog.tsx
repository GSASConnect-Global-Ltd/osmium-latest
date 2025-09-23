"use client";
import { useEffect, useState } from "react";
import BlogCard from "../blog/BlogCard";
import { useTheme } from "next-themes";

// Define backend blog post type
interface BlogPostFromAPI {
  _id: string;
  title: string;
  summary: string;
  images: string[];
}

export default function LatestBlogs() {
  const [blogPosts, setBlogPosts] = useState<BlogPostFromAPI[]>([]);
  const [loading, setLoading] = useState(true);

  // next-themes
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const res = await fetch(
          "https://osmium-blog-admin-backend.onrender.com/api/blogs/recent"
        );
        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data: BlogPostFromAPI[] = await res.json();

        const mapped = data.map((post) => ({
          ...post,
          images: post.images
            .filter((img) => img && img !== "null")
            .map(
              (img) => `https://osmium-blog-admin-backend.onrender.com${img}`
            ),
        }));

        setBlogPosts(mapped);
      } catch (err) {
        console.error("❌ Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Determine if dark mode is active (use resolvedTheme to respect system/default)
  const isDark =
    (typeof resolvedTheme === "string" && resolvedTheme === "dark") ||
    theme === "dark";

  const sectionBgClass = isDark ? "bg-gray-900" : "bg-gray-50";

  return (
    <section
      className={`py-20 transition-colors duration-300 ${sectionBgClass}`}
    >
      <div className="px-4 mx-auto sm:px-6 max-w-7xl">
        {/* Heading */}
        <h2
          className="mb-12 text-center ppEditorial text-[28px] sm:text-[36px] md:text-[48px] 
                     leading-[36px] sm:leading-[44px] md:leading-[56px] text-foreground"
          style={{
            fontWeight: 200,
            fontStyle: "ultralight",
            letterSpacing: "-2%",
            textAlign: "center",
          }}
        >
          Latest Blog & Resources
        </h2>

        {/* States */}
        {loading ? (
          <p className="text-center text-muted-foreground">
            Loading blog posts...
          </p>
        ) : blogPosts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No blog posts available.
          </p>
        ) : (
          <div className="grid justify-center gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard
                key={post._id}
                id={post._id}
                title={post.title}
                summary={post.summary}
                image={post.images[0]}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
