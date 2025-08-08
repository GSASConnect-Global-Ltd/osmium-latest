import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: { slug: string };
  searchParams?: Record<string, string>;
}

const relatedPosts = [
  {
    title: 'Typography in Digital Spaces',
    slug: 'typography-digital-spaces',
    image: 'https://images.unsplash.com/photo-1743397015920-e4682a813b24?q=80',
  },
  {
    title: 'Color Theory for Brands',
    slug: 'color-theory-brands',
    image: 'https://images.unsplash.com/photo-1743397015920-e4682a813b24?q=80',
  },
  {
    title: 'Psychology of User Experience',
    slug: 'psychology-user-experience',
    image: 'https://images.unsplash.com/photo-1743397015920-e4682a813b24?q=80',
  },
];

export async function generateStaticParams() {
  return relatedPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  return {
    title: `Blog | ${params.slug.replace(/-/g, ' ')}`,
    description: `Read about ${params.slug.replace(/-/g, ' ')} on our design blog.`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps): Promise<ReactElement> {
  const { slug } = params;

  return (
    <main className="min-h-screen text-black bg-white">
      <article className="container max-w-6xl px-4 py-12 mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-sm text-white bg-gray-900 rounded-full">
            Design
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            The Future of Minimalist Design
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-700">
            <span>By Sarah Chen</span>
            <span>•</span>
            <span>March 15, 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Content + Sidebar */}
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Main Content */}
          <section className="flex-1 prose prose-lg text-black">
            <p>
              In an era of information overload, minimalist design has become a philosophy that prioritizes clarity, functionality, and user experience.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1100&q=80"
              alt="Minimalist workspace with clean lines"
              width={1100}
              height={600}
              className="w-full h-auto my-8 rounded-lg shadow"
            />
            <h2>The Power of Less</h2>
            <p>Minimalism is about removing the unnecessary — leaving behind only what’s essential.</p>
            <Image
              src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=1100&q=80"
              alt="Clean user interface demonstrating minimalism"
              width={1100}
              height={600}
              className="w-full h-auto my-8 rounded-lg shadow"
            />
            <h2>Beyond Aesthetics</h2>
            <p>It’s about performance, accessibility, and reducing cognitive load for better UX.</p>
            <Image
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1100&q=80"
              alt="Architectural example of minimalist design"
              width={1100}
              height={600}
              className="w-full h-auto my-8 rounded-lg shadow"
            />

            {/* Footer */}
            <footer className="pt-8 mt-16 border-t border-gray-300">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <p className="mb-1 text-sm text-gray-500">Written by</p>
                  <p className="font-semibold text-black">Sarah Chen</p>
                </div>
                <div className="flex gap-4">
                  <button className="px-4 py-2 text-sm transition border border-black rounded hover:bg-black hover:text-white">
                    Share
                  </button>
                  <button className="px-4 py-2 text-sm transition border border-black rounded hover:bg-black hover:text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </footer>
          </section>

          {/* Related Posts */}
          <aside className="md:w-72">
            <h3 className="mb-4 text-xl font-semibold">Related Articles</h3>
            <ul className="space-y-6">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block overflow-hidden rounded-lg shadow group hover:shadow-md"
                  >
                    <div className="relative w-full h-40">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h4 className="text-sm font-semibold text-black group-hover:underline">
                        {post.title}
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
