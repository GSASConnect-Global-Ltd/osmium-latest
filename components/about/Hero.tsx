// app/about/page.tsx
"use client";

import Image from "next/image";
import heroBackground from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen bg-background font-santoshi">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center min-h-screen px-4 py-12 sm:px-6 md:px-16 lg:px-24 md:py-20">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroBackground}
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
          {/* Black overlay with 90% opacity */}
          <div className="absolute inset-0 bg-black/90" />
        </div>

        {/* Main Heading */}
        <div className="relative z-10 px-2 mt-20 sm:mt-28 md:mt-40 lg:mt-48">
          <p
            className="mx-auto ppEditorial font-thin 
                       text-[28px] sm:text-[48px] md:text-[72px] 
                       leading-[36px] sm:leading-[60px] md:leading-[86px] 
                       tracking-[0.02em] sm:tracking-[0.04em]
                       text-center 
                       bg-gradient-to-r from-[#EBFAF2] to-[#FFFFFF] bg-clip-text text-transparent"
            style={{ maxWidth: "666px" }}
          >
            Engineering Change, <br className="hidden sm:block" />
            Empowering People, <br className="hidden sm:block" />
            Building Tomorrow.
          </p>
        </div>

        {/* Small Info */}
        <div className="relative z-10 w-full mt-12 sm:mt-20 md:mt-[119px] mb-16 sm:mb-24 md:mb-[314px] max-w-7xl px-4">
          <div className="flex justify-center md:justify-end">
            <p className="w-full sm:w-[385px] text-center md:text-left text-gray-300 font-[Satoshi] 
                         text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-[0.01em]">
              We are a technology company shaping Africa&apos;s digital sustainable
              future through AI, Robotics, Energy and Extended Reality.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full px-4 mb-12 text-white sm:mb-16 md:mb-32 max-w-7xl">
          <div className="flex justify-center md:justify-start">
            <div className="max-w-3xl space-y-6 sm:max-w-4xl sm:space-y-8 md:space-y-12">
              {/* First paragraph */}
              <p className="w-full md:w-[923px] font-[Satoshi] font-light 
                           text-[16px] sm:text-[24px] md:text-[36px] 
                           leading-[24px] sm:leading-[34px] md:leading-[44px] 
                           tracking-[0.01em] sm:tracking-[0.015em] 
                           text-gray-200 text-center md:text-left">
                At ORREL, we don&apos;t just build technologies – we connect people,
                industries, and ideas through AI, Robotics, Renewable Energy and
                Extended Reality.
              </p>

              {/* Highlighted mission */}
              <p className="w-full md:w-[923px] font-[Satoshi] font-light 
                           text-[16px] sm:text-[24px] md:text-[36px] 
                           leading-[24px] sm:leading-[34px] md:leading-[44px] 
                           tracking-[0.01em] sm:tracking-[0.015em] 
                           text-center md:text-left">
                <span className="font-medium text-[#00C896]">
                  Our mission is to make technology a partner, not a barrier.
                </span>{" "}
                From XR classrooms to clean energy microgrids, we design solutions
                that empower students, energize communities and drive industries
                toward efficiency and opportunity.
              </p>

              <p className="w-full md:w-[923px] font-[Satoshi] font-light 
                           text-[16px] sm:text-[24px] md:text-[36px] 
                           leading-[24px] sm:leading-[34px] md:leading-[44px] 
                           tracking-[0.01em] sm:tracking-[0.015em] 
                           text-gray-200 text-center md:text-left">
                We started in education and energy, but today our work spans
                automation, digital platforms, and smart systems – all built to
                unlock Africa&apos;s creativity and global competitiveness. And
                we&apos;re only getting started.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-4 sm:bottom-8 md:bottom-12 left-1/2">
          <div className="flex justify-center w-5 h-8 border-2 rounded-full sm:w-6 sm:h-10 border-primary">
            <div className="w-1 h-2.5 sm:h-3 mt-1.5 sm:mt-2 rounded-full bg-primary animate-bounce"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
