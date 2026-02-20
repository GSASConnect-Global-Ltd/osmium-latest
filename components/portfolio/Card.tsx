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

      {/* Image Section */}
      <div className="relative w-full h-[240px] sm:h-[300px] md:h-[359px] rounded-[24px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Section */}
      <div className="mt-6 sm:mt-8 md:mt-[32px] flex flex-col space-y-3 sm:space-y-4">

        {/* Title */}
        <p className="text-[#1B2514] font-satoshi font-bold 
                      text-[20px] sm:text-[22px] md:text-[24px] 
                      leading-[24px] tracking-[0.24px]">
          {title}
        </p>

        {/* Description */}
        <p className="text-[#1B2514] font-satoshi font-normal 
                      text-[14px] sm:text-[15px] md:text-[16px] 
                      leading-[22px] md:leading-[24px] 
                      tracking-[0.16px]">
          {description}
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2">
          {keywords.length > 0 ? (
            keywords.map((keyword) => (
              <span
                key={keyword}
                className="flex items-center justify-center
                           px-3 py-1.5 sm:px-3 sm:py-1.5
                           rounded-md bg-[#F5F5F5]
                           text-[#1B2514] font-satoshi
                           text-[12px] sm:text-[14px] md:text-[16px]
                           leading-[18px] md:leading-[24px]"
              >
                {keyword}
              </span>
            ))
          ) : (
            <span
              className="px-3 py-1.5 rounded-md bg-[#F5F5F5]
                         text-gray-400 italic
                         text-[12px] sm:text-[14px]"
            >
              No keywords
            </span>
          )}
        </div>

        {/* Button */}
        <button
          className="flex items-center gap-2 text-[#13492D]
                     font-bold
                     text-[14px] sm:text-[15px] md:text-[16px]
                     leading-[20px]
                     transition-all duration-300
                     hover:opacity-80"
        >
          View Project
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
