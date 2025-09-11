"use client";

const HeroSection = () => {
  return (
    <section className="bg-black text-gray-900 min-h-[70vh] flex items-start px-6 sm:px-10 md:px-16 lg:px-[120px] pt-32 sm:pt-40 md:pt-60 lg:pt-[365px] pb-16 sm:pb-20 md:pb-28 lg:pb-[100px]">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <div className="space-y-4 sm:space-y-6">
            <p
              className="text-white uppercase"
              style={{
                fontFamily: "Satoshi",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "16px",
                letterSpacing: "1%",
              }}
            >
              Our Works
            </p>

            <p
              className="ppEditorial text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight lg:leading-[80px] text-white"
              style={{
                fontWeight: 200,
                fontStyle: "normal",
                letterSpacing: "4%",
                opacity: 1,
              }}
            >
              ORREL&apos;s Projects, Case Studies & Innovations
            </p>
          </div>

          {/* Right side aligned bottom */}
          <div className="self-end mt-6 lg:pl-8 lg:mt-0">
            <p
              className="text-white text-base sm:text-lg md:text-[16px] leading-relaxed"
              style={{
                fontFamily: "Satoshi",
                fontWeight: 400,
                fontStyle: "normal",
                letterSpacing: "1%",
                opacity: 1,
              }}
            >
              Explore ORREL&apos;s portfolio of impact-driven projects in AI,
              robotics, renewable energy, and VR. See how we are engineering
              Africa&apos;s sustainable future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
