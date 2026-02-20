"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen lg:h-[900px] bg-black overflow-hidden">
      {/* Box 1 - shifted down so only half shows */}
      <Image
        src="/home/box.png"
        alt="Background Box 1"
        width={1328}
        height={724}
        className="absolute opacity-40"
        style={{
          transform: "rotate(67.18deg)",
          bottom: "-36%", // relative positioning for responsiveness
          left: "-34%",
        }}
        priority
      />

      {/* Box 2 - shifted down so only half shows */}
      <Image
        src="/home/box.png"
        alt="Background Box 2"
        width={1195}
        height={652}
        className="absolute opacity-40"
        style={{
          transform: "rotate(112.82deg)",
          bottom: "-30%",
          left: "60%",
        }}
        priority
      />

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center w-full max-w-[729px]">
        <div className="mx-auto space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <p className="text-white text-[clamp(28px,5vw,71px)] leading-[clamp(36px,6vw,86.4px)] tracking-[0.04em] font-extralight ppEditorial">
            Building Africa&apos;s Digital &amp; Sustainable Future
          </p>

          {/* Description */}
          <p
            className="mx-auto max-w-xl text-gray-300 text-[clamp(14px,2vw,16px)] leading-[clamp(20px,3vw,24px)] tracking-[0.01em]"
            style={{ fontFamily: "Satoshi" }}
          >
            At ORREL, we are at the forefront of technological advancement,
            uniting diverse sectors under one umbrella. Our mission is to drive
            innovation in AI, renewable energies, and more, shaping a sustainable
            future for Africa and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6">
            <button
              className="inline-flex items-center justify-center px-6 py-3 sm:py-4 text-black font-bold text-[clamp(14px,2vw,16px)] tracking-wide rounded-[12px] border border-white bg-[#37D181] transition-colors duration-300 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-black"
              style={{ fontFamily: "Satoshi" }}
            >
              Partner with us
            </button>

            <button
              className="inline-flex items-center justify-center h-12 px-5 text-[clamp(14px,2vw,16px)] font-bold text-white tracking-[0.01em] border border-white rounded-lg transition-colors duration-300 hover:bg-white hover:text-black"
              style={{ fontFamily: "Satoshi" }}
            >
              Explore our solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
