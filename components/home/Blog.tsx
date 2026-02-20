"use client";

import { useEffect, useState } from "react";
import BlogCard from "../blog/BlogCard";
import { useTheme } from "next-themes";

// Backend blog post type
interface BlogPostFromAPI {
  _id: string;
  title: string;
  summary: string;
  images: string[];
  slug: string;
}

// ✅ Safe image URL builder
const buildImageUrl = (src?: string) => {
  if (!src || src === "null") return undefined;

  // already absolute URL → keep it
  if (src.startsWith("http")) return src;

  // relative → attach backend URL
  return `${process.env.NEXT_PUBLIC_API_BASE_URL}${src}`;
};

export default function LatestBlogs() {
  const [blogPosts, setBlogPosts] = useState<BlogPostFromAPI[]>([]);
  const [loading, setLoading] = useState(true);

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/recent`
        );

        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data: BlogPostFromAPI[] = await res.json();

        // ✅ Normalize images safely
        const mapped = data.map((post) => ({
          ...post,
          images: post.images
            ?.filter((img) => img && img !== "null")
            .map(buildImageUrl)
            .filter(Boolean) as string[],
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

  // theme detection
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
                slug={post.slug}
                title={post.title}
                summary={post.summary}
                image={post.images?.[0]}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
