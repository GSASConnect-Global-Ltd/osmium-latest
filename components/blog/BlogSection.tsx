//C:\Next\j\project\Osmium\osmium\components\blog\BlogSection.tsx
"use client";

import { useEffect, useState } from "react";
import BlogHero from "./BlogHero";
import BlogCategories from "./BlogCategories";
import BlogCard from "./BlogCard";

// Define backend response
interface BlogPostFromAPI {
  _id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  images: string[];
}

// Normalize into frontend shape
interface BlogPost {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
}

const categories = [
  "All",
  "Development",
  "AI & Machine Learning",
  "Cloud Computing",
  "DevOps",
];

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`
        );
        if (!res.ok) throw new Error("Failed to fetch posts");

        const data: BlogPostFromAPI[] = await res.json();

        const normalized: BlogPost[] = data.map((post) => {
          let imageUrl = "/assets/NoImage.png";

          if (post.images && post.images[0]) {
            const img = post.images[0];
            // ✅ If backend already gives a full URL, use it directly
            if (img.startsWith("http")) {
              imageUrl = img;
            } else {
              // ✅ Otherwise, prepend API base URL
              imageUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${img}`;
            }
          }

          return {
            id: post._id,
            title: post.title,
            summary: post.summary,
            category: post.category,
            image: imageUrl,
          };
        });

        setPosts(normalized);
      } catch (err) {
        console.error("❌ Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-lg text-black">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="mb-20">
        <BlogHero />
      </div>

      {/* Categories */}
      <div className="mb-16">
        <BlogCategories
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Blog Posts */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-y-20 gap-x-12 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  summary={post.summary}
                  image={post.image}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No posts available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
