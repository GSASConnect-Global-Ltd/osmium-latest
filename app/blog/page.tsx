"use client";

import { useEffect, useState } from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogPost, { BlogPostData } from "@/components/blog/BlogPost";

// Define the backend data type
interface BlogPostFromAPI {
  _id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  images: string[]; // Array of image paths from backend
}

export default function BlogPage() {
  const [featuredPost, setFeaturedPost] = useState<BlogPostData | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch posts");

        const data: BlogPostFromAPI[] = await res.json();

        if (data.length > 0) {
          // First post as featured
          const featured = data[0];
          setFeaturedPost({
            id: featured._id,
            title: featured.title,
            summary: featured.summary,
            author: featured.author,
            date: new Date(featured.date).toLocaleDateString(),
            readTime: featured.readTime,
            category: featured.category,
            image:
              featured.images && featured.images[0]
                ? `http://localhost:5000${featured.images[0]}`
                : "",
          });

          // Remaining posts as recent
          const recents = data.slice(1).map((post: BlogPostFromAPI) => ({
            id: post._id,
            title: post.title,
            summary: post.summary,
            author: post.author,
            date: new Date(post.date).toLocaleDateString(),
            readTime: post.readTime,
            category: post.category,
            image:
              post.images && post.images[0]
                ? `http://localhost:5000${post.images[0]}`
                : "",
          }));

          setRecentPosts(recents);
        }
      } catch (err) {
        console.error("❌ Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-lg text-black">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Hero */}
      <BlogHero />

      {/* Main Content */}
      <main className="container px-4 py-16 mx-auto">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold">Featured Article</h2>
              <p className="text-gray-500">
                Our latest deep dive into design and technology
              </p>
            </div>
            <BlogPost post={featuredPost} featured />
          </section>
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <section>
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold">Recent Posts</h2>
              <p className="text-gray-500">
                Fresh perspectives on design, development, and creativity
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {recentPosts.map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
