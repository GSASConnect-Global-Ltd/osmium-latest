"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

        // ✅ clean and format images
        const mapped = data.map((post) => ({
          ...post,
          images: post.images
            .filter((img) => img && img !== "null")
            .map((img) => `https://osmium-blog-admin-backend.onrender.com${img}`),
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
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-extrabold text-center text-gray-900 md:text-4xl">
          Latest Blog Posts
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading blog posts...</p>
        ) : blogPosts.length === 0 ? (
          <p className="text-center text-gray-600">No blog posts available.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post._id}
                className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg"
              >
                {post.images.length > 0 ? (
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    className="object-cover w-full h-48"
                    width={400}
                    height={250}
                  />
                ) : (
                  <Image
                    src="/assets/NoImage.png"
                    alt="No image available"
                    className="object-cover w-full h-48"
                    width={400}
                    height={250}
                  />
                )}

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post._id}`}
                      className="inline-block px-4 py-2 text-sm font-medium text-white transition-colors bg-black rounded-md hover:bg-gray-800"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
