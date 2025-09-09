"use client";

import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

interface PortfolioCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  keywords?: string[];
  category: string;
}

const PortfolioCard = ({
  image,
  title,
  description,
  keywords = [],
}: PortfolioCardProps) => {
  return (
    <div className="overflow-hidden transition duration-300 group rounded-xl">
      {/* Image Section with Gradient Overlay */}
      <div
        className="relative w-full"
        style={{
          height: "359px",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

     {/* Content Section */}
      <div className="mt-[32px] flex flex-col space-y-4">
        {/* Title */}
        <p
          style={{
            color: "#1B2514",
            fontFamily: "Satoshi",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "24px", // 100%
            letterSpacing: "0.24px",
          }}
        >
          {title}
        </p>

        {/* Description */}
        <p
          style={{
            color: "#1B2514",
            fontFamily: "Satoshi",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px", // 150%
            letterSpacing: "0.16px",
          }}
        >
          {description}
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2">
          {keywords.length > 0 ? (
            keywords.map((keyword) => (
              <span
                key={keyword}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  background: "#F5F5F5",
                  color: "var(--foundation-primary-shade-dark-hover, #1B2514)",
                  fontFamily: "Satoshi",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px", // 150%
                  letterSpacing: "0.16px",
                }}
              >
                {keyword}
              </span>
            ))
          ) : (
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                padding: "6px 10px",
                borderRadius: "4px",
                background: "#F5F5F5",
                color: "#9CA3AF",
                fontFamily: "Satoshi",
                fontSize: "14px",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: "20px",
              }}
            >
              No keywords
            </span>
          )}
        </div>

        {/* Button */}
        <button
          className="flex items-center gap-2 group"
          style={{
            color: "#13492D",
            textAlign: "center",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "20px", // 125%
          }}
        >
          View Project
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

    </div>
  );
};

export default PortfolioCard;
