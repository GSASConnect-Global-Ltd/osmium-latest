"use client";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Box 1 - shifted down so only half shows */}
      <img
        src="/home/box.png"
        alt="Background Box 1"
        className="absolute opacity-40"
        style={{
          width: "1328.21px",
          height: "724.48px",
          transform: "rotate(67.18deg)",
          bottom: "-362px", // half hidden
          left: "-455.46px",
        }}
      />

      {/* Box 2 - shifted down so only half shows */}
      <img
        src="/home/box.png"
        alt="Background Box 2"
        className="absolute opacity-40"
        style={{
          width: "1194.70px",
          height: "651.65px",
          transform: "rotate(112.82deg)",
          bottom: "-325px", // half hidden
          left: "763.1px",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline */}
          <p className="text-[72px] ppEditorial font-extralight leading-[86.4px] tracking-[0.04em] text-center text-white">
            Building Africa&apos;s Digital &amp; Sustainable Future
          </p>

          <p
            className="max-w-2xl mx-auto text-[16px] font-normal leading-[24px] tracking-[0.01em] text-center text-gray-300"
            style={{ fontFamily: "Satoshi" }}
          >
            At ORREL, we are at the forefront of technological advancement,
            uniting diverse sectors under one umbrella. Our mission is to drive
            innovation in AI, renewable energies, and more — shaping a
            sustainable future for Africa and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <button
              className="h-12 min-w-40 px-5 text-[16px] font-bold leading-[24px] tracking-[0.01em] text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
              style={{ fontFamily: "Satoshi" }}
            >
              Partner with us
            </button>

            <button
              className="h-12 px-5 text-base font-bold text-white tracking-[0.01em] transition-colors border border-white rounded-lg min-w-40 hover:bg-white hover:text-black"
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
