"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  tag?: string; // small text above headline
  headline: string;
  description: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  width?: string; // optional content width
}

const Hero: React.FC<HeroProps> = ({
  tag,
  headline,
  description,
  backgroundImage,
  buttonText,
  buttonLink,
  width = "600px",
}) => {
  return (
    <section
      className="relative flex items-start w-full"
      style={{ height: "974px" }} // Fixed height
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 w-full"
        style={{ paddingTop: "401px" }} // Push content down
      >
        <div className="space-y-6 text-left mx-[100px]" style={{ width }}>
          {/* Tagline */}
          {tag && (
            <p
              className="text-[16px] font-normal leading-[24px] tracking-[0.01em] text-gray-300"
              style={{ fontFamily: "Satoshi" }}
            >
              {tag}
            </p>
          )}

          {/* Headline */}
          <p
            className="text-[72px] font-thin leading-[76px] tracking-[0.04em] text-white"
            style={{ fontFamily: "PP Editorial New", width: "598px" }}
          >
            {headline}
          </p>

          {/* Description */}
          <p
            className="text-[16px] font-normal leading-[24px] tracking-[0.01em] text-gray-300"
            style={{ fontFamily: "Satoshi", width: "463px" }}
          >
            {description}
          </p>

          {/* CTA Button */}
          {buttonText && (
            <div>
              {buttonLink ? (
                <a href={buttonLink}>
                  <button
                    className="h-12 px-8 text-[16px] font-bold leading-[24px] tracking-[0.01em] text-black transition-colors bg-[#37D181] rounded-lg border border-white hover:bg-green-700"
                    style={{ fontFamily: "Satoshi" }}
                  >
                    {buttonText}
                  </button>
                </a>
              ) : (
                <button
                  className="h-12 px-8 text-[16px] font-bold leading-[24px] tracking-[0.01em] text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
                  style={{ fontFamily: "Satoshi" }}
                >
                  {buttonText}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </section>
  );
};

export default Hero;
