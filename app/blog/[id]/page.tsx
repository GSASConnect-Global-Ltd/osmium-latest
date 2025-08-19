"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogPost {
  _id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  images: (string | null)[];
}

// Backend API response type
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

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      router.replace("/post");
      return;
    }

    const fetchPost = async () => {
      try {
        // Fetch main post
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch post");
        const data: BlogPostFromAPI = await res.json();

        const mappedPost: BlogPost = {
          _id: data._id,
          title: data.title,
          summary: data.summary,
          author: data.author,
          date: data.date,
          readTime: data.readTime,
          category: data.category,
          images: (data.images || []).map(
            (img) => (img ? `http://localhost:5000${img}` : null)
          ),
        };
        setPost(mappedPost);

        // Fetch related posts from same category
        const relatedRes = await fetch(
          `http://localhost:5000/api/blogs?category=${data.category}&excludeId=${data._id}`
        );
        if (relatedRes.ok) {
          const relatedData: BlogPostFromAPI[] = await relatedRes.json();
          const mappedRelated = relatedData.map((p) => ({
            _id: p._id,
            title: p.title,
            summary: p.summary,
            author: p.author,
            date: p.date,
            readTime: p.readTime,
            category: p.category,
            images: (p.images || []).map((img) =>
              img ? `http://localhost:5000${img}` : null
            ),
          }));
          setRelatedPosts(mappedRelated);
        }
      } catch (error) {
        console.error("❌ Error fetching post:", error);
        alert("Failed to load post");
        router.replace("/post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-lg text-black">Loading post...</p>
      </div>
    );
  }

  if (!post) return null;

  return (
    <main className="min-h-screen text-black bg-white">
      <article className="container max-w-6xl px-4 py-12 mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-sm text-white bg-gray-900 rounded-full">
            {post.category}
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">{post.title}</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-700">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Content + Sidebar */}
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Main Content */}
          <section className="flex-1 prose prose-lg text-black">
            {post.images.map(
              (img, i) =>
                img && (
                  <div
                    key={i}
                    className="relative w-full h-64 my-8 overflow-hidden border rounded-md border-black/10"
                  >
                    <Image
                      src={img}
                      alt={`Blog image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )
            )}
            <p className="whitespace-pre-line">{post.summary}</p>
          </section>

          {/* Related Posts */}
          <aside className="md:w-72">
            <h3 className="mb-4 text-xl font-semibold">Related Articles</h3>
            <ul className="space-y-6">
              {relatedPosts.map((related) => (
                <li key={related._id}>
                  <Link
                    href={`/blog/${related._id}`}
                    className="block overflow-hidden rounded-lg shadow group hover:shadow-md"
                  >
                    {related.images[0] && (
                      <div className="relative w-full h-40">
                        <Image
                          src={related.images[0]!}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-4 bg-white">
                      <h4 className="text-sm font-semibold text-black group-hover:underline">
                        {related.title}
                      </h4>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>
    </main>
  );
}
