"use client";

import Image from "next/image";
import techCenterImage from "@/assets/tech-center-image.jpg";

const SolutionsSection = () => {
  return (
    <section className="px-6 py-20 mx-auto max-w-7xl">
      {/* Solutions Header */}
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <p
          className="mb-4 text-[48px] leading-[58px] tracking-[0.02em] font-light"
          style={{ fontFamily: "PP Editorial New" }}
        >
          <span
            className="italic text-green-600"
            style={{ fontFamily: "PP Editorial New" }}
          >
            Solutions
          </span>{" "}
          That Power Growth
        </p>
        <p className="text-lg text-gray-600">
          We design and deliver solutions in AI, Energy, XR and more —
          powering Africa&apos;s growth in the digital age.
        </p>
      </div>

      {/* Main Cards Grid */}
      <div className="grid grid-cols-1 gap-6 mb-12 lg:grid-cols-3">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between p-6 transition-all duration-300 border rounded-xl hover:shadow-lg">
            <h4
              className="text-xl font-bold text-gray-900"
              style={{ fontFamily: "Satoshi" }}
            >
              Renewable Energy
            </h4>
            <p className="text-gray-600" style={{ fontFamily: "Satoshi" }}>
              We deliver clean, reliable energy for homes, farms and industries
            </p>
          </div>

          <div className="flex flex-col justify-between p-6 transition-all duration-300 border rounded-xl hover:shadow-lg">
            <h4
              className="text-xl font-bold text-gray-900"
              style={{ fontFamily: "Satoshi" }}
            >
              AI & Robotics
            </h4>
            <p className="text-gray-600" style={{ fontFamily: "Satoshi" }}>
              We build intelligent systems that automate industries and boost
              productivity
            </p>
          </div>
        </div>

        {/* Middle Column - Image */}
        <div className="overflow-hidden transition-all duration-300 border rounded-xl hover:shadow-lg">
          <Image
            src={techCenterImage}
            alt="ORREL Technology Center"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between p-6 transition-all duration-300 border rounded-xl hover:shadow-lg">
            <h4
              className="text-xl font-bold text-gray-900"
              style={{ fontFamily: "Satoshi" }}
            >
              Digital Twin Technology
            </h4>
            <p className="text-gray-600" style={{ fontFamily: "Satoshi" }}>
              We create digital replicas of real systems for safer, smarter
              decision-making
            </p>
          </div>

          <div className="flex flex-col justify-between p-6 transition-all duration-300 border rounded-xl hover:shadow-lg">
            <h4
              className="text-xl font-bold text-gray-900"
              style={{ fontFamily: "Satoshi" }}
            >
              Extended Reality (XR)
            </h4>
            <p className="text-gray-600" style={{ fontFamily: "Satoshi" }}>
              We build XR environments that transform learning, design and
              collaboration
            </p>
          </div>
        </div>
      </div>

      {/* Additional Services Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between p-6 transition-all duration-300 border rounded-xl hover:shadow-lg">
          <h4
            className="mb-4 text-xl font-bold text-gray-900"
            style={{ fontFamily: "Satoshi" }}
          >
            Game Development
          </h4>
          <p className="text-gray-600" style={{ fontFamily: "Satoshi" }}>
            Creating immersive gaming experiences with cutting-edge technology
          </p>
        </div>

        <div className="flex flex-col justify-between p-6 transition-all duration-300 border rounded-xl hover:shadow-lg">
          <h4
            className="mb-4 text-xl font-bold text-gray-900"
            style={{ fontFamily: "Satoshi" }}
          >
            Software Engineering
          </h4>
          <p className="text-gray-600" style={{ fontFamily: "Satoshi" }}>
            Building robust software solutions for businesses and enterprises
          </p>
        </div>

        <div className="flex flex-col justify-between p-6 transition-all duration-300 border rounded-xl hover:shadow-lg">
          <h4
            className="mb-4 text-xl font-bold text-gray-900"
            style={{ fontFamily: "Satoshi" }}
          >
            Smart Home Concept
          </h4>
          <p className="text-gray-600" style={{ fontFamily: "Satoshi" }}>
            Integrating IoT and AI for intelligent home automation systems
          </p>
        </div>

        <div className="flex flex-col justify-between p-6 text-white transition-all duration-300 bg-blue-600 border rounded-xl hover:shadow-lg">
          <h4
            className="mb-6 text-xl font-bold"
            style={{ fontFamily: "Satoshi" }}
          >
            Let&apos;s Build the Future Together
          </h4>
          <button
            className="w-full px-4 py-2 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
            style={{ fontFamily: "Satoshi" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
