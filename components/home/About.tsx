"use client";


const AboutSection = () => {
  return (
    <section className="p-[120px] mx-auto max-w-7xl">
      {/* About Header */}
      <div className="mb-16">
        <h2
          className="mb-4 text-[16px] font-medium leading-[24px] tracking-[0.01em] text-left text-gray-500 uppercase"
          style={{ fontFamily: "Inter Tight" }}
        >
          About
        </h2>

        <p
          className="w-full text-[36px] font-normal leading-[44px] tracking-[0.015em] text-gray-800"
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
