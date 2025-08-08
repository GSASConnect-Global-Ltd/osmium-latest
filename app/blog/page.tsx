import BlogHero from "@/components/blog/BlogHero";
import BlogPost, { BlogPostData } from "@/components/blog/BlogPost";

export default function BlogPage() {
  // Featured post
  const featuredPost: BlogPostData = {
    id: "1",
    title: "The Future of Minimalist Design",
    summary:
      "Exploring how simplicity and intentionality are shaping the next generation of digital experiences, from user interfaces to brand identity.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Design",
    slug: "future-minimalist-design",
    image:
      "https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=1100&q=80",
  };

  const recentPosts: BlogPostData[] = [
    {
      id: "2",
      title: "Building Sustainable Design Systems",
      summary:
        "How to create design systems that grow with your product and team, ensuring consistency and efficiency at scale.",
      author: "Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Development",
      slug: "sustainable-design-systems",
      image:
        "https://images.unsplash.com/photo-1754047167199-7867304392c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      title: "The Psychology of User Experience",
      summary:
        "Understanding cognitive principles that drive user behavior and how to apply them in interface design.",
      author: "Emma Thompson",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "UX Research",
      slug: "psychology-user-experience",
      image:
        "https://images.unsplash.com/photo-1754415266974-404a215e6c62?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      title: "Typography in Digital Spaces",
      summary:
        "Exploring the art and science of type design for screens, from readability to emotional impact.",
      author: "David Park",
      date: "March 8, 2024",
      readTime: "5 min read",
      category: "Typography",
      slug: "typography-digital-spaces",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=80",
    },
    {
      id: "5",
      title: "Color Theory for Brands",
      summary:
        "How color psychology influences brand perception and practical tips for creating effective color palettes.",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Branding",
      slug: "color-theory-brands",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1100&q=80",
    },
  ];

  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Hero */}
      <BlogHero />

      {/* Main Content */}
      <main className="container px-4 py-16 mx-auto">
        {/* Featured Post */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold">Featured Article</h2>
            <p className="text-gray-500">
              Our latest deep dive into design and technology
            </p>
          </div>
          <BlogPost post={featuredPost} featured />
        </section>

        {/* Recent Posts */}
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
      </main>
    </div>
  );
}
