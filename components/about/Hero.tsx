// app/about/page.tsx
"use client";

import Image from "next/image";
import heroBackground from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen bg-background font-santoshi">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center min-h-screen px-8 py-20 md:px-16 lg:px-24">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroBackground}
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
          {/* Black overlay with 80% opacity */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Main Heading */}
        <div className="relative z-10 mt-32 md:mt-40 lg:mt-48">
          <p
            className="mx-auto font-[PP Editorial New] font-extralight text-[72px] leading-[86px] tracking-[0.04em] text-center bg-gradient-to-r from-[#EBFAF2] to-[#FFFFFF] bg-clip-text text-transparent"
            style={{ width: "666px", fontFamily: "PP Editorial New" }}
          >
            Engineering Change, <br />
            Empowering People, <br />
            Building Tomorrow.
          </p>
        </div>

        {/* Small Info */}
        <div className="relative z-10 w-full mt-20 mb-24 max-w-7xl">
          <div className="flex justify-end">
            <p className="w-[385px] text-left text-gray-200 font-[Satoshi] text-[16px] leading-[24px] tracking-[0.01em]">
              We are a technology company shaping Africa&apos;s digital sustainable
              future through AI, Robotics, Energy and Extended Reality.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full mb-32 text-white max-w-7xl">
          <div className="flex justify-start">
            <div className="max-w-4xl space-y-12">
              {/* First paragraph */}
              <p className="w-[923px] font-[Satoshi] font-light text-[36px] leading-[44px] tracking-[0.015em] text-gray-100">
                At ORREL, we don&apos;t just build technologies – we connect people,
                industries, and ideas through AI, Robotics, Renewable Energy and
                Extended Reality.
              </p>

              {/* Highlighted mission */}
              <p className="w-[923px] font-[Satoshi] font-light text-[36px] leading-[44px] tracking-[0.015em]">
                <span className="font-medium text-[#00C896]">
                  Our mission is to make technology a partner, not a barrier.
                </span>
              </p>

              {/* Other paragraphs */}
              <p className="w-[923px] font-[Satoshi] font-light text-[36px] leading-[44px] tracking-[0.015em] text-gray-100">
                From XR classrooms to clean energy microgrids, we design solutions
                that empower students, energize communities and drive industries
                toward efficiency and opportunity.
              </p>

              <p className="w-[923px] font-[Satoshi] font-light text-[36px] leading-[44px] tracking-[0.015em] text-gray-100">
                We started in education and energy, but today our work spans
                automation, digital platforms, and smart systems – all built to
                unlock Africa&apos;s creativity and global competitiveness. And
                we&apos;re only getting started.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-12 left-1/2">
          <div className="flex justify-center w-6 h-10 border-2 rounded-full border-primary">
            <div className="w-1 h-3 mt-2 rounded-full bg-primary animate-bounce"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
