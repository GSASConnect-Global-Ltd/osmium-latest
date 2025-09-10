"use client";
import { useEffect, useState } from "react";
import BlogCard from "../blog/BlogCard";


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

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 max-w-7xl">
        {/* Heading */}
        <h2
          className="mb-12 text-center ppEditorial text-[28px] sm:text-[36px] md:text-[48px] leading-[36px] sm:leading-[44px] md:leading-[56px]"
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
          <p className="text-center text-gray-600">Loading blog posts...</p>
        ) : blogPosts.length === 0 ? (
          <p className="text-center text-gray-600">No blog posts available.</p>
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
