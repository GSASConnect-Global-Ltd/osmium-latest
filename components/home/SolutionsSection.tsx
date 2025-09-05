"use client";

const SolutionsSection = () => {
  return (
    <section
      className="
        flex flex-col items-start gap-[10px] 
        w-[1440px] px-[120px] py-[120px] 
        mx-auto
      "
    >
      {/* Solutions Header */}
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <p className="mb-4 text-[48px] ppEditorial leading-[58px] tracking-[0.02em] font-light w-[505px] mx-auto">
          <span className="italic text-green-600">Solutions</span>{" "}
          That Power Growth
        </p>
        <p className="text-lg text-gray-600">
          We design and deliver solutions in AI, Energy, XR and more — powering
          Africa&apos;s growth in the digital age.
        </p>
      </div>

      {/* Main Cards Grid */}
      <div className="grid grid-cols-1 gap-6 mb-12 lg:grid-cols-[367px_435px_367px] justify-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between p-6 border rounded-[16px] border-gray-200 w-[367px] h-[310px] opacity-100 hover:shadow-lg transition-all duration-300">
            <p className="font-bold text-[24px] leading-[24px] tracking-[0.01em] text-gray-900">
              Renewable Energy
            </p>
            <p className="text-gray-600">
              We deliver clean, reliable energy for homes, farms and industries
            </p>
          </div>

          <div className="flex flex-col justify-between p-6 border rounded-[16px] border-gray-200 w-[367px] h-[310px] opacity-100 hover:shadow-lg transition-all duration-300">
            <p className="font-bold text-[24px] leading-[24px] tracking-[0.01em] text-gray-900">
              AI & Robotics
            </p>
            <p className="text-gray-600">
              We build intelligent systems that automate industries and boost
              productivity
            </p>
          </div>
        </div>

        {/* Middle Column - Animated GIF */}
        <div className="flex items-center justify-center border-2 border-gray-200 rounded-[24px] overflow-hidden w-[435px] h-[634px] opacity-100 hover:shadow-lg transition-all duration-300">
          <img
            src="/home/Orrel.gif"
            alt="ORREL Technology Center"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between p-6 border rounded-[16px] border-gray-200 w-[367px] h-[310px] opacity-100 hover:shadow-lg transition-all duration-300">
            <p className="font-bold text-[24px] leading-[24px] tracking-[0.01em] text-gray-900">
              Digital Twin Technology
            </p>
            <p className="text-gray-600">
              We create digital replicas of real systems for safer, smarter
              decision-making
            </p>
          </div>

          {/* ✅ CTA Card */}
          <div className="flex flex-col justify-between p-6 rounded-[16px] border w-[367px] h-[310px] opacity-100 text-white bg-blue-600 border-blue-600 hover:shadow-lg transition-all duration-300">
            <p className="font-bold text-[24px] leading-[24px] tracking-[0.01em]">
              Explore Our Solutions
            </p>
            <button className="w-full px-4 py-2 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
