"use client";

import { useEffect, useRef, useState } from "react";
import BlogHero from "./BlogHero";
import BlogCategories from "./BlogCategories";
import BlogCard from "./BlogCard";

// Backend response type
interface BlogPostFromAPI {
  _id: string;
  slug: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  images: string[];
}

// Normalized frontend type
interface BlogPost {
  slug: string;
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

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Drag-to-scroll for desktop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.style.setProperty("-webkit-overflow-scrolling", "touch");
    el.style.touchAction = "pan-x";
    el.style.scrollSnapType = "x mandatory";

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (window.innerWidth < 1024) return;
      isDown = true;
      startX = e.pageX;
      scrollLeft = el.scrollLeft;
      el.classList.add("dragging");
      e.preventDefault();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const walk = startX - e.pageX;
      el.scrollLeft = scrollLeft + walk;
    };

    const onPointerUp = () => {
      isDown = false;
      el.classList.remove("dragging");
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  // Fetch blogs from backend
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
            if (img.startsWith("http")) {
              imageUrl = img;
            } else {
              imageUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${img}`;
            }
          }

          return {
            slug: post.slug,
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
        <div className="mx-auto max-w-7xl">
          <div
            ref={scrollRef}
            className="flex items-center overflow-x-auto flex-nowrap snap-x snap-mandatory scrollbar-hide lg:overflow-visible lg:justify-between lg:w-full"
            style={{
              width: "100%",
              borderRadius: "100px",
              border: "1px solid #E8E8E8",
              background: "#F5F5F5",
              padding: "8px",
              margin: "0 auto",
              scrollBehavior: "smooth",
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex justify-center items-center rounded-full transition-all duration-300 flex-shrink-0 snap-start 
                  ${
                    activeCategory === category
                      ? "bg-black text-white shadow-md"
                      : "bg-transparent text-gray-800 hover:bg-gray-200"
                  } 
                  lg:flex-1 lg:mx-1
                `}
                style={{
                  padding: "10px 20px",
                  textAlign: "center",
                  fontFamily: "Satoshi",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "24px",
                  letterSpacing: "0.16px",
                  whiteSpace: "nowrap",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-y-20 gap-x-12 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug} // ✅ fixed
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
