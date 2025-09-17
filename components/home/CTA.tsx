"use client";

import Image from "next/image";

const CTASection = () => {
  return (
    <section className="flex items-center justify-center px-4 sm:px-8 md:px-[100px] py-12 sm:py-16 md:py-[120px]">
      <div
        className="relative flex items-center justify-start overflow-hidden bg-center bg-no-repeat bg-cover w-full max-w-[1240px] h-[400px] sm:h-[500px] md:h-[720px] rounded-[24px] sm:rounded-[32px] md:rounded-[48px]"
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        {/* Large background logo (shifted right like Figma) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/home/orrel-3.svg"
            alt="ORREL Logo"
            width={700}
            height={700}
            className="object-contain translate-x-16 opacity-10 sm:translate-x-32 md:translate-x-60"
            priority
          />

        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-[24px] sm:rounded-[32px] md:rounded-[48px]" />

        {/* Content (left aligned) */}
        <div
          className="absolute z-10 flex flex-col px-4 sm:px-6 md:px-8"
          style={{
            width: "100%",
            maxWidth: "505px",
            top: "40px",
            gap: "16px",
          }}
        >
          {/* Heading */}
          <p
            className="mb-0 text-white text-[24px] leading-[32px] sm:text-[32px] sm:leading-[42px] md:text-[48px] md:leading-[58px]"
            style={{
              letterSpacing: "0.02em",
            }}
          >
            <span className="text-transparent ppEditorial bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text">
              Join Us in Shaping Tomorrow
            </span>
          </p>

          {/* Description */}
          <p
            className="mb-6 sm:mb-8 md:mb-12 text-gray-300 text-sm sm:text-base md:text-[16px] leading-[20px] sm:leading-[24px]"
            style={{
              fontFamily: "Satoshi",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Partner with ORREL to innovate and transform industries through
            cutting-edge technology and sustainable solutions
          </p>

          {/* CTA Button */}
          <button
            className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-4 text-black font-satoshi font-bold text-sm sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-wide rounded-[10px] sm:rounded-[12px] border-2 border-[#f8faf9] bg-[#37D181] transition-colors duration-300 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-black"
            style={{
              width: "fit-content",
              minWidth: "140px",
              border: "1px solid white",
              fontFamily: "Satoshi",
            }}
          >
            Partner with us
          </button>
        </div>

        {/* Bottom right text */}
        <div className="absolute z-10 bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8">
          <p className="text-xs font-medium tracking-wider text-white sm:text-sm md:text-lg">
            Building Africa&apos;s future
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
