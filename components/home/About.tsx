"use client";

const AboutSection = () => {
  return (
    <section className="px-6 md:px-[120px] py-[80px] md:py-[120px] mx-auto max-w-7xl">
      {/* About Header */}
      <div className="mb-12 md:mb-16">
        <h2
          className="mb-4 text-sm md:text-base font-medium leading-[20px] md:leading-[24px] tracking-[0.16px] text-left"
          style={{ fontFamily: "Inter Tight", color: "#6E7888" }}
        >
          About
        </h2>

        <p
          className="
            w-full 
            text-xl sm:text-2xl md:text-[36px] 
            font-normal 
            leading-[28px] sm:leading-[32px] md:leading-[44px] 
            tracking-[0.015em] text-gray-800
          "
          style={{ fontFamily: "Satoshi" }}
        >
          ORREL is building Africa&apos;s digital and sustainable future with
          solutions in AI, Robotics, Renewable Energy, and XR. We harness
          Africa&apos;s talent and creativity to transform industries, empower
          education, and drive communities toward global leadership.
        </p>
      </div>
    </section>
  );
};

export { AboutSection };
