"use client";

import Image from "next/image";
import heroBackground from "@/assets/portfolio-hero.jpg";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroBackground}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline */}
          <p className="text-6xl font-light leading-tight md:text-7xl lg:text-8xl">
            Building Africa&apos;s{" "}
            <span className="text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text">
              Digital &amp; Sustainable
            </span>{" "}
            Future
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-300 md:text-lg">
            At ORREL, we are at the forefront of technological advancement,
            uniting diverse sectors under one umbrella. Our mission is to drive
            innovation in AI, renewable energies, and more — shaping a
            sustainable future for Africa and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <button className="h-12 px-5 text-base font-medium text-white transition-colors bg-green-600 rounded-lg min-w-40 hover:bg-green-700">
              Partner with us
            </button>
            <button className="h-12 px-5 text-base font-medium text-white transition-colors border border-white rounded-lg min-w-40 hover:bg-white hover:text-black">
              Explore our solutions
            </button>
          </div>
        </div>
      </div>

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </section>
  );
};

export default Hero;
