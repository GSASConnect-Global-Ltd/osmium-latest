"use client";

import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface SectionProps {
  title: string;
  description: string;
  image: string | StaticImageData; // 👈 This line changed
  imageAlt: string;
  ctaText?: string;
  reverse?: boolean;
}

export const Section = ({
  title,
  description,
  image,
  imageAlt,
  ctaText = "Learn More",
  reverse = false,
}: SectionProps) => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          <div className={`space-y-6 ${reverse ? "lg:col-start-2" : ""}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight">
              {title}
            </h2>
            <p className="text-xl text-[color-mix(in srgb, var(--foreground) 70%, transparent)] leading-relaxed">

              {description}
            </p>
           <button className="inline-flex items-center px-6 py-3 text-lg font-medium transition-all duration-300 border-2 border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]">

              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          <div className={`${reverse ? "lg:col-start-1" : ""}`}>
            <div className="overflow-hidden shadow-lg rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src={image}
                alt={imageAlt}
                width={800}
                height={400}
                className="object-cover w-full transition-all duration-300 h-80 lg:h-96 filter grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
