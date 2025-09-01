"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      <div className="px-6 mx-auto max-w-7xl">
        <h2
          className="mb-12 text-center"
          style={{
            fontFamily: "PP Editorial New",
            fontWeight: 200,
            fontStyle: "ultralight",
            fontSize: "48px",
            lineHeight: "56px",
            letterSpacing: "-2%",
            textAlign: "center",
          }}
        >
          Latest Blog & Resources
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
                className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 shadow-sm rounded-[32px] gap-3 p-2"
                style={{
                  width: "398px",
                  height: "437px",
                }}
              >
                {/* Blog Image */}
                {post.images.length > 0 ? (
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    className="object-cover w-[382px] h-[217px] rounded-[24px]"
                    width={382}
                    height={217}
                  />
                ) : (
                  <Image
                    src="/assets/NoImage.png"
                    alt="No image available"
                    className="object-cover w-[382px] h-[217px] rounded-[24px]"
                    width={382}
                    height={217}
                  />
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 gap-3 p-2">
                  <h3
                    className="text-gray-900 line-clamp-2"
                    style={{
                      fontFamily: "PP Editorial New",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "28px",
                      letterSpacing: "0%",
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="flex-1 text-gray-600 line-clamp-3"
                    style={{
                      fontFamily: "Satoshi",
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "28px",
                      letterSpacing: "-1%",
                    }}
                  >
                    {post.summary}
                  </p>

                  {/* Read Article Button */}
                  <Link
                    href={`/blog/${post._id}`}
                    className="inline-flex items-center justify-center gap-2 transition-colors bg-white border rounded-[8px] hover:bg-gray-100"
                    style={{
                      width: "123px",
                      height: "36px",
                      padding: "8px 12px",
                      fontFamily: "Satoshi",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "20px",
                      letterSpacing: "0%",
                      textAlign: "center",
                      borderWidth: "1px",
                      color: "#000",
                    }}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
