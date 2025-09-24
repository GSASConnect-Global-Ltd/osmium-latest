"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Twitter, Linkedin, Facebook } from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  images: (string | null)[];
  content: string;
  slug: string;
}

interface BlogPostFromAPI {
  _id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  images: string[];
  content: string;
  slug: string;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      router.replace("/blog");
      return;
    }

    const fetchPost = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${slug}`
        );
        if (!res.ok) throw new Error("Failed to fetch post");

        const data: BlogPostFromAPI = await res.json();

        const mappedPost: BlogPost = {
          _id: data._id,
          title: data.title,
          summary: data.summary,
          author: data.author,
          date: data.date,
          readTime: data.readTime || "5 min read",
          category: data.category,
          images: (data.images || []).map(
            (img) => (img ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${img}` : null)
          ),
          content: data.content,
          slug: data.slug,
        };
        setPost(mappedPost);

        const relatedRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs?category=${data.category}&excludeSlug=${data.slug}`
        );
        if (relatedRes.ok) {
          const relatedData: BlogPostFromAPI[] = await relatedRes.json();
          const mappedRelated = relatedData.map((p) => ({
            _id: p._id,
            title: p.title,
            summary: p.summary,
            author: p.author,
            date: p.date,
            readTime: p.readTime || "5 min read",
            category: p.category,
            images: (p.images || []).map(
              (img) => (img ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${img}` : null)
            ),
            content: p.content,
            slug: p.slug,
          }));
          setRelatedPosts(mappedRelated);
        }
      } catch (error) {
        console.error("❌ Error fetching post:", error);
        router.replace("/blog");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-lg text-black">Loading post...</p>
      </div>
    );
  }

  if (!post) return null;

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}&text=${encodeURIComponent(post.title)}`;
  const linkedinShare = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
    currentUrl
  )}&title=${encodeURIComponent(post.title)}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <main className="min-h-screen text-black bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={post.images[0] || "/assets/NoImage.png"}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black/50">
          <span className="inline-block px-4 py-1 mb-4 text-sm text-white bg-gray-900 rounded-full">
            {post.category}
          </span>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-200">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <article className="container flex flex-col max-w-6xl px-6 py-12 mx-auto md:flex-row md:gap-12">
        {/* Content */}
        <section className="flex-1 prose prose-lg text-black max-w-none">
          <p className="text-lg text-gray-700 whitespace-pre-line">{post.summary}</p>

          {post.images.slice(1).map(
            (img, i) =>
              img && (
                <div
                  key={i}
                  className="relative w-full my-8 overflow-hidden shadow-md rounded-xl"
                >
                  <Image
                    src={img}
                    alt={`Blog image ${i + 2}`}
                    width={1200}
                    height={600}
                    className="object-cover w-full h-auto"
                  />
                </div>
              )
          )}

          <div className="mt-8 leading-relaxed text-gray-800 whitespace-pre-line">
            {post.content}
          </div>

          {/* Social Share Buttons */}
          <div className="flex items-center mt-8 space-x-4">
            <span className="font-semibold">Share:</span>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition-colors hover:text-blue-700"
            >
              <Twitter size={24} />
            </a>
            <a
              href={linkedinShare}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 transition-colors hover:text-blue-900"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 transition-colors hover:text-blue-800"
            >
              <Facebook size={24} />
            </a>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="md:w-80">
          <h3 className="mb-6 text-xl font-semibold">Related Articles</h3>
          <ul className="space-y-6">
            {relatedPosts.map((related) => (
              <li key={related._id}>
                <Link
                  href={`/blog/${related.slug}`}
                  className="block overflow-hidden transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
                >
                  {related.images[0] && (
                    <div className="relative w-full h-40">
                      <Image
                        src={related.images[0]!}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h4 className="text-base font-semibold text-black line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {related.summary}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </main>
  );
}
