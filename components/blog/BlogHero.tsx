const BlogHero = () => {
  return (
    <section
     id="blogHero"
      className="relative transition-colors duration-500 blog-hero"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover pointer-events-none opacity-10"
        style={{ backgroundImage: `url(/assets/blog-hero.jpg)` }}
      />

      {/* Content */}
      <div className="container relative px-4 py-20 mx-auto md:py-32">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Thoughts, Ideas & Stories
          </h1>
          <p
            className="mb-8 text-xl leading-relaxed md:text-2xl"
            style={{ color: "rgba(var(--foreground-rgb, 255,255,255), 0.8)" }}
          >
            A collection of professional insights, creative thoughts, and meaningful conversations about design, technology, and life.
          </p>
          <div
            className="flex items-center justify-center gap-4 text-sm"
            style={{ color: "rgba(var(--foreground-rgb, 255,255,255), 0.6)" }}
          >
            <span>Updated weekly</span>
            <span>•</span>
            <span>5 min reads</span>
            <span>•</span>
            <span>Professional insights</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
