"use client";

import Image from "next/image";

const TechSection = () => {
  const services = [
    "Renewable Energy",
    "Artificial Intelligence & Robotics",
    "Extended Reality (XR)",
    "Digital Twin Technology",
    "Game Development",
    "Software Engineering",
    "Smart Home Concepts",
    "Modelling & Simulation",
    "Consultation",
    "Blockchain Technology",
  ];

  const colors = [
    "bg-green-100 text-green-800",
    "bg-blue-100 text-blue-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
    "bg-indigo-100 text-indigo-800",
    "bg-red-100 text-red-800",
    "bg-teal-100 text-teal-800",
    "bg-orange-100 text-orange-800",
    "bg-cyan-100 text-cyan-800",
  ];

  return (
    <section className="relative min-h-screen px-4 sm:px-6 md:px-6 lg:px-8 py-10 sm:py-14 md:py-20 overflow-hidden bg-[#EBFAF2]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute w-40 h-40 rounded-full top-20 left-6 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-primary/10 blur-3xl animate-float" />
      <div
        className="absolute w-56 h-56 rounded-full bottom-20 right-6 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent/10 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Main Heading */}
        <div className="mb-10 text-center sm:mb-14 md:mb-16">
          <p className="ppEditorial font-[100] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-snug md:leading-[58px] tracking-[0.02em]">
            <span className="block text-black">Transforming Lives through</span>
            <span className="text-[#13492D] block italic">
              Innovative Technologies
            </span>
          </p>
        </div>

        {/* Cards Layout */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Left Card */}
          <div className="p-4 sm:p-6 lg:p-8 border border-green-200 shadow-md bg-[#EBFAF2] rounded-2xl hover:shadow-lg transition-all duration-500 group">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <p
                  className="text-sm sm:text-base lg:text-[24px] leading-relaxed lg:leading-[32px] text-muted-foreground group-hover:text-foreground"
                  style={{ fontFamily: "Satoshi", fontWeight: 500 }}
                >
                  Founded in 2022,{" "}
                  <span className="font-semibold text-primary">ORREL</span> set
                  out to build Africa&apos;s future in AI, Robotics, Renewable
                  Energy and more
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <div
                  className="
                    flex flex-col items-center gap-[12.679px]
                    w-[80.931px] p-[15.215px] 
                    rounded-[15.215px] 
                    bg-[var(--foundation-primary-shade-dark-hover,#1B2514)]
                  "
                >
                  <Image
                    src="/home/orrel-2.svg"
                    alt="ORREL Company Logo"
                    width={300}
                    height={77}
                    className="object-contain h-auto w-28 sm:w-40 lg:w-auto opacity-80 group-hover:opacity-100 drop-shadow-lg"
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Middle Card */}
          <div className="p-4 sm:p-6 lg:p-8 border border-green-200 shadow-md bg-[#EBFAF2] rounded-2xl hover:shadow-lg transition-all duration-500 group">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <p
                  className="text-sm sm:text-base lg:text-[24px] leading-relaxed lg:leading-[32px] text-muted-foreground group-hover:text-foreground"
                  style={{ fontFamily: "Satoshi", fontWeight: 500 }}
                >
                  Empowering{" "}
                  <span className="font-semibold text-accent">
                    industries, students, communities
                  </span>{" "}
                  and many others through human-centered technology
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 299 85"
                  fill="none"
                  className="opacity-80 group-hover:opacity-100 w-40 sm:w-56 lg:w-[299px] lg:h-[85px]"
                >
                  <path
                    d="M1.81299 83.4033L48.451 47.8322C55.9085 42.1443 65.996 41.3217 74.2765 45.7262L98.5954 58.6619C104.343 61.7191 111.086 62.3103 117.278 60.3L176.916 40.9369C181.794 39.3531 187.051 39.3736 191.917 40.9955L219.8 50.2899C227.598 52.8895 236.185 51.3168 242.556 46.122L297.187 1.5769"
                    stroke="black"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="p-4 sm:p-6 lg:p-8 border border-green-200 shadow-md bg-[#EBFAF2] rounded-2xl hover:shadow-lg transition-all duration-500 group">
            <div className="flex flex-col h-full">
              <p
                className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-[24px] leading-relaxed lg:leading-[32px] text-muted-foreground group-hover:text-foreground"
                style={{ fontFamily: "Satoshi", fontWeight: 500 }}
              >
                <span className="text-base font-bold sm:text-lg lg:text-2xl text-primary">
                  10
                </span>{" "}
                key services spanning AI, Energy, XR, and more — driving
                innovation across Africa
              </p>

              {/* Services */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`px-2 py-1 sm:px-3 sm:py-1.5 border rounded-md shadow text-xs sm:text-sm hover:scale-105 hover:shadow-md transition-transform duration-300 ${
                      colors[index % colors.length]
                    }`}
                    style={{
                      fontFamily: "Satoshi",
                      fontWeight: 500,
                      letterSpacing: "0.01em",
                      transform: `rotate(${
                        index % 2 === 0 ? "-2deg" : "2deg"
                      })`,
                    }}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
