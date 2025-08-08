    import Image from 'next/image';
    import Link from "next/link";

    export interface BlogPostData {
    id: string;
    title: string;
    summary: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
    image: string; // ✅ Add this to include image
    }

    interface BlogPostProps {
    post: BlogPostData;
    featured?: boolean;
    }

    const BlogPost = ({ post, featured = false }: BlogPostProps) => {
    return (
        <Link href={`/blog/${post.id}`}>
        <div
        className={`group relative overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${
            featured ? 'md:col-span-2' : ''
        }`}
        style={{
            backgroundColor: 'var(--background)',
            borderColor: 'var(--footer-bg)',
            color: 'var(--foreground)',
        }}
        >
        {/* Image */}
        <div className="relative w-full h-52 md:h-64">
            <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ borderBottom: '1px solid var(--footer-bg)' }}
            />
        </div>

        {/* Content */}
        <div className="p-6 animate-fade-up">
            {/* Category and Read Time */}
            <div className="flex items-center gap-3 mb-3 text-sm">
            <span
                className="px-3 py-1 font-semibold tracking-wide uppercase rounded-full"
                style={{
                backgroundColor: 'var(--footer-bg)',
                color: 'var(--foreground)',
                fontSize: '0.7rem',
                }}
            >
                {post.category}
            </span>
            <span style={{ color: 'var(--footer-link)', fontSize: '0.75rem' }}>
                {post.readTime}
            </span>
            </div>

            {/* Title */}
            <h2
            className={`mb-2 font-bold group-hover:text-[var(--accent)] transition-colors ${
                featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
            }`}
            style={{
                color: 'var(--foreground)',
                lineHeight: '1.3',
            }}
            >
            {post.title}
            </h2>

            {/* Summary */}
            <p
            className="mt-2 text-base leading-relaxed"
            style={{ color: 'var(--footer-link)' }}
            >
            {post.summary}
            </p>

            {/* Author and Date */}
            <div
            className="flex items-center justify-between mt-6 text-xs font-medium tracking-wide"
            style={{ color: 'var(--footer-link)' }}
            >
            <span>By {post.author}</span>
            <span>{post.date}</span>
            </div>
        </div>
        </div>
        </Link>
    );
    };

    export default BlogPost;
