"use client";

const SolutionsSection = () => {
  return (
    <section
      className="
        flex flex-col items-center 
        w-full px-6 sm:px-10 md:px-[120px] py-[60px] md:py-[120px] 
        mx-auto max-w-[1440px]
      "
    >
      {/* Solutions Header */}
      <div className="max-w-2xl mx-auto mb-10 text-center md:mb-16">
        <p className="mb-4 text-2xl sm:text-3xl md:text-[48px] ppEditorial leading-tight md:leading-[58px] tracking-[0.02em] font-light">
          <span className="italic text-green-600">Solutions</span>{" "}
          That Power Growth
        </p>
        <p className="text-sm text-gray-600 sm:text-base md:text-lg">
          We design and deliver solutions in AI, Energy, XR and more — powering
          Africa&apos;s growth in the digital age.
        </p>
      </div>

      {/* Main Cards Grid */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1fr] 
          gap-6 mb-12 w-full max-w-[1200px]
        "
      >
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between p-5 sm:p-6 border rounded-[16px] border-gray-200 w-full h-auto min-h-[220px] md:min-h-[310px] hover:shadow-lg transition-all duration-300">
            <p className="font-bold text-lg sm:text-xl md:text-[24px] leading-snug text-gray-900">
              Renewable Energy
            </p>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              We deliver clean, reliable energy for homes, farms and industries
            </p>
          </div>

          <div className="flex flex-col justify-between p-5 sm:p-6 border rounded-[16px] border-gray-200 w-full h-auto min-h-[220px] md:min-h-[310px] hover:shadow-lg transition-all duration-300">
            <p className="font-bold text-lg sm:text-xl md:text-[24px] leading-snug text-gray-900">
              AI & Robotics
            </p>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              We build intelligent systems that automate industries and boost
              productivity
            </p>
          </div>
        </div>

        {/* Middle Column - Animated GIF */}
        <div className="flex items-center justify-center border-2 border-gray-200 rounded-[24px] overflow-hidden w-full h-[220px] sm:h-[320px] md:h-[634px] order-last lg:order-none hover:shadow-lg transition-all duration-300">
          <img
            src="/home/Orrel.gif"
            alt="ORREL Technology Center"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between p-5 sm:p-6 border rounded-[16px] border-gray-200 w-full h-auto min-h-[220px] md:min-h-[310px] hover:shadow-lg transition-all duration-300">
            <p className="font-bold text-lg sm:text-xl md:text-[24px] leading-snug text-gray-900">
              Digital Twin Technology
            </p>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              We create digital replicas of real systems for safer, smarter
              decision-making
            </p>
          </div>

          {/* ✅ CTA Card */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-[16px] border w-full min-h-[220px] md:min-h-[310px] text-white bg-blue-600 border-blue-600 hover:shadow-lg transition-all duration-300">
            <p className="font-bold text-lg sm:text-xl md:text-[24px] leading-snug">
              Explore Our Solutions
            </p>
            <button className="w-full px-4 py-2 mt-6 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
