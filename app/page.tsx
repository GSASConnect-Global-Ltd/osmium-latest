// app/page.tsx

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/About";
import TechSection from "@/components/home/TechSection";
import { ProjectsShowcase } from "@/components/home/Project";

import CTASection from "@/components/home/CTA";

// Define backend blog post type
interface BlogPostFromAPI {
  _id: string;
  title: string;
  summary: string;
  images: string[]; // paths from backend
}



export default function Home() {

  const [blogPosts, setBlogPosts] = useState<BlogPostFromAPI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchBlogPosts = async () => {
    try {
      // ✅ Fetch only recent blogs
      const res = await fetch("http://localhost:5000/api/blogs/recent");
      if (!res.ok) throw new Error("Failed to fetch blogs");

      const data: BlogPostFromAPI[] = await res.json();

      // Prepend full URL to images
      const mapped = data.map((post) => ({
        ...post,
        images: post.images.map((img) => `http://localhost:5000${img}`),
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
    <div className="min-h-screen font-sans text-black transition-colors duration-300 bg-white">
      <Hero />
      <AboutSection />

    <TechSection />
    <ProjectsShowcase />

      

         {/* Latest Blog Posts Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="mb-12 text-4xl font-bold text-center">Latest Blog Posts</h2>

        {loading ? (
          <p className="text-center text-black">Loading blog posts...</p>
        ) : blogPosts.length === 0 ? (
          <p className="text-center text-black">No blog posts available.</p>
        ) : (
          <div className="flex justify-center gap-8 px-4 overflow-x-auto">
            {blogPosts.map((post, i) => (
              <div key={post._id} className="min-w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                {post.images[0] && (
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    className="object-cover w-full h-48"
                    width={300}
                    height={192}
                  />
                )}
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                  <p className="mb-2 text-sm text-gray-700">{post.summary}</p>
                  <Link href={`/blog/${post._id}`}>
                    <button className="px-4 py-2 font-semibold text-black transition border border-black rounded hover:bg-black hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

<CTASection />

        
      </div>
    
  );
}
