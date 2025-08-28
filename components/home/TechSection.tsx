"use client";

import Image from "next/image";
import orrelLogo from "@/assets/orrel-logo.png";
import humanTechIllustration from "@/assets/human-tech-illustration.png";
import sevenFocusAreas from "@/assets/seven-focus-areas.png";

const TechSection = () => {
  const focusAreas = [
    "AI and robotics",
    "Digital twin tech",
    "XR",
    "Game Dev",
    "Renewable energy",
    "Software engineering",
    "Smart home concept",
  ];

  return (
    <section className="py-20 px-6 min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Transforming Lives through
            <br />
            <span className="text-accent">innovative technologies</span>
          </h1>
        </div>

        {/* Three Cards Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Card - Company Story */}
          <div className="p-8 bg-green-50 rounded-2xl border border-green-200 shadow-md hover:shadow-lg transition-all duration-500 group">
            <div className="h-full flex flex-col">
              <div className="flex-1">
                <p className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                  Founded in 2022,{" "}
                  <span className="font-semibold text-primary">ORREL</span> set
                  out to build Africa&apos;s future in AI, Robotics, Renewable
                  energy and more
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  src={orrelLogo}
                  alt="ORREL Company Logo"
                  className="h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Middle Card - Mission */}
          <div className="p-8 bg-green-50 rounded-2xl border border-green-200 shadow-md hover:shadow-lg transition-all duration-500 group">
            <div className="h-full flex flex-col">
              <div className="flex-1">
                <p className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                  Empowering{" "}
                  <span className="font-semibold text-accent">
                    industries, students, communities
                  </span>{" "}
                  and many others through human-centered technology
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  src={humanTechIllustration}
                  alt="Human-centered technology illustration"
                  className="h-32 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Card - Focus Areas */}
          <div className="p-8 bg-green-50 rounded-2xl border border-green-200 shadow-md hover:shadow-lg transition-all duration-500 group">
            <div className="h-full flex flex-col">
              <div className="flex-1">
                <p className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors mb-4">
                  <span className="font-bold text-2xl text-primary">7</span> key
                  focus areas spanning AI, Energy, to platforms &amp; Fintech,
                  driving innovation across Africa
                </p>

                {/* Focus areas list */}
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {focusAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0" />
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Image
                  src={sevenFocusAreas}
                  alt="Seven focus areas illustration"
                  className="h-28 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
