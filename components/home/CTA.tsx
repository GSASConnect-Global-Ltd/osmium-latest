"use client";

import Image from "next/image";

const CTASection = () => {
  return (
    <section className="flex items-center justify-center px-[100px] py-[120px]">

      <div
        className="relative flex items-center justify-start overflow-hidden bg-center bg-no-repeat bg-cover"
        style={{
          backgroundColor: "rgba(0,0,0,0.7)", // semi-transparent black
          width: "1240px",
          height: "720px",
          borderRadius: "48px",
        }}
      >
        {/* Logo under background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Image
            src="/assets/orrel_logo.png"
            alt="ORREL Logo"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Dark overlay (optional, can adjust opacity) */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-[48px]" />

      {/* Content */}
<div
  className="absolute z-10 flex flex-col px-8"
  style={{
    width: "505px",
    height: "260px",
    top: "120px",
    gap: "24px",
  }}
>
  {/* Heading */}
 <p
  className="mb-0 text-white md:text-7xl"
  style={{
    fontFamily: "PP Editorial New",
    fontWeight: 200,
    fontStyle: "ultralight",
    fontSize: "48px",
    lineHeight: "58px",
    letterSpacing: "2%",
  }}
>
  <span className="text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text">
    Join Us in Shaping Tomorrow
  </span>
</p>


  <p
  className="mb-12 text-gray-300 md:text-xl"
  style={{
    fontFamily: "Satoshi",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "1%",
  }}
>
  Partner with ORREL to innovate and transform industries through
  cutting-edge technology and sustainable solutions
</p>


  {/* CTA Button */}
<button
  className="inline-flex items-center justify-center px-6 py-4 text-black font-satoshi font-bold text-[16px] leading-[20px] tracking-wide rounded-[12px] border-2 border-[#f8faf9] bg-[#37D181] transition-colors duration-300 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-black"
  style={{
    width: "163px",
    minWidth: "fit-content",
    border: "1px solid white",
    fontFamily: "Satoshi"
  }}
>
  Partner with us
</button>



</div>

        {/* Bottom right text */}
        <div className="absolute z-10 bottom-8 right-8">
          <p className="text-lg font-medium tracking-wider text-white">
            Building Africa&apos;s future
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
