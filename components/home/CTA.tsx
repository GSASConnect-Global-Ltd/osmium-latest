"use client";

const CTASection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat px-6 md:px-12"
      style={{ backgroundImage: "url(/assets/orrel-hero-bg.jpg)" }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content container aligned left + shifted upward */}
      <div className="relative z-10 max-w-3xl text-left -translate-y-16 md:-translate-y-24">
        {/* Heading */}
        <p className="text-5xl md:text-7xl mb-8 leading-tight text-white font-light">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Join Us in Shaping Tomorrow
          </span>
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          Partner with ORREL to innovate and transform industries through
          cutting-edge technology and sustainable solutions
        </p>

        {/* CTA Button (green background) */}
        <button className="text-base md:text-lg px-10 py-4 rounded-full font-semibold tracking-wide uppercase bg-green-600 text-white hover:bg-green-700 transition-colors">
          Partner with us
        </button>
      </div>

      {/* Bottom right text (unchanged) */}
      <div className="absolute bottom-8 right-8 z-10">
        <p className="text-white text-lg font-medium tracking-wider">
          Building Africa&apos;s future
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-2 h-32 bg-gradient-to-b from-white to-transparent opacity-40" />
      <div className="absolute bottom-1/4 right-12 w-2 h-24 bg-gradient-to-t from-white to-transparent opacity-40" />
    </section>
  );
};

export default CTASection;
