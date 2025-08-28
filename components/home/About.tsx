"use client";

import Image from "next/image";
import techCenterImage from "@/assets/tech-center-image.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* About Header */}
      <div className="mb-16">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4 text-left">
          About
        </h2>
        <p className="text-lg leading-relaxed max-w-4xl text-gray-800">
          ORREL is building Africa&apos;s digital and sustainable future with solutions in AI,
          Robotics, Renewable Energy, and XR. We harness Africa&apos;s talent and creativity
          to transform industries, empower education, and drive communities toward global leadership.
        </p>
      </div>

      {/* Solutions Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <p className="text-3xl font-extralight mb-4 text-gray-900">
            <span className="italic text-green-600">Solutions</span> That Power <br /> Growth
          </p>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We design and deliver solutions in AI, Energy, XR and more - Powering Africa&apos;s
            growth in the digital age.
          </p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="p-6 border rounded-xl hover:shadow-lg transition-all duration-300 flex-1 flex flex-col">
              <h4 className="text-xl font-semibold mb-16 text-gray-900"> {/* very large spacing */}
                Renewable Energy
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We deliver clean, reliable energy for homes, farms and industries
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-lg transition-all duration-300 flex-1 flex flex-col">
              <h4 className="text-xl font-semibold mb-16 text-gray-900"> {/* very large spacing */}
                AI & Robotics
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We build intelligent systems that automate industries and boost productivity
              </p>
            </div>
          </div>

          {/* Middle Column - Image */}
          <div className="flex">
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 w-full h-full">
              <Image
                src={techCenterImage}
                alt="ORREL Technology Center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div className="p-6 border rounded-xl hover:shadow-lg transition-all duration-300 flex-1 flex flex-col">
              <h4 className="text-xl font-semibold mb-16 text-gray-900"> {/* very large spacing */}
                Digital Twin Technology
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We create digital replicas of real systems for safer, smarter decision-making
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-lg transition-all duration-300 flex-1 flex flex-col">
              <h4 className="text-xl font-semibold mb-16 text-gray-900"> {/* very large spacing */}
                Extended Reality (XR)
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We build XR environments that transform learning, design and collaboration
              </p>
            </div>
          </div>
        </div>

        {/* Additional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 border rounded-xl hover:shadow-lg transition-all duration-300">
            <h4 className="text-lg font-semibold mb-12 text-gray-900">
              Game Development
            </h4>
            <p className="text-gray-600 text-sm">
              Creating immersive gaming experiences with cutting-edge technology
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition-all duration-300">
            <h4 className="text-lg font-semibold mb-12 text-gray-900">
              Software Engineering
            </h4>
            <p className="text-gray-600 text-sm">
              Building robust software solutions for businesses and enterprises
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition-all duration-300">
            <h4 className="text-lg font-semibold mb-12 text-gray-900">
              Smart Home Concept
            </h4>
            <p className="text-gray-600 text-sm">
              Integrating IoT and AI for intelligent home automation systems
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition-all duration-300 bg-blue-600 text-white">
            <h4 className="text-lg font-semibold mb-12">
              Let&apos;s Build the Future Together
            </h4>
            <button className="w-full px-4 py-2 rounded-lg bg-white text-blue-600 font-medium hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
