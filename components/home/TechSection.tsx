"use client";

import Image from "next/image";
import { TrendingUp } from "lucide-react";


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
    <section className="relative min-h-screen px-6 py-20 overflow-hidden bg-[#EBFAF2]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-primary/10 blur-3xl animate-float" />
      <div
        className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-accent/10 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Main Heading */}
        <div className="mb-16 text-center">
          <p
            className="text-center font-[100] text-[48px] leading-[58px] tracking-[0.02em] ppEditorial"
          >
            <span className="block text-black">Transforming Lives through</span>
            <span className="text-[#13492D] block italic">
              Innovative Technologies
            </span>
          </p>
        </div>
       

        {/* Three Cards Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Card - Company Story */}
          <div className="p-8 transition-all duration-500 border border-green-200 shadow-md bg-[#EBFAF2] rounded-2xl hover:shadow-lg group">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <p
                  className="transition-colors group-hover:text-foreground text-muted-foreground"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "32px",
                    letterSpacing: "0.01em",
                  }}
                >
                  Founded in 2022,{" "}
                  <span className="font-semibold text-primary">ORREL</span> set
                  out to build Africa&apos;s future in AI, Robotics, Renewable
                  Energy and more
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <Image
                  src="/assets/orrel_logo.png"
                  alt="ORREL Company Logo"
                  width={300}
                  height={77}
                  className="object-contain w-auto h-16 transition-opacity opacity-80 group-hover:opacity-100 drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Middle Card - Mission */}
          <div className="p-8 transition-all duration-500 border border-green-200 shadow-md bg-[#EBFAF2] rounded-2xl hover:shadow-lg group">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <p
                  className="transition-colors group-hover:text-foreground text-muted-foreground"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "32px",
                    letterSpacing: "0.01em",
                  }}
                >
                  Empowering{" "}
                  <span className="font-semibold text-accent">
                    industries, students, communities
                  </span>{" "}
                  and many others through human-centered technology
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <TrendingUp className="w-16 h-16 text-primary opacity-80 group-hover:opacity-100" />
              </div>
            </div>
          </div>

          {/* Right Card - Services */}
          <div className="p-8 transition-all duration-500 border border-green-200 shadow-md bg-[#EBFAF2] rounded-2xl hover:shadow-lg group">
            <div className="flex flex-col h-full">
              <p
                className="mb-6 transition-colors group-hover:text-foreground text-muted-foreground"
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "0.01em",
                }}
              >
                <span className="text-2xl font-bold text-primary">10</span> key
                services spanning AI, Energy, XR, and more — driving
                innovation across Africa
              </p>

             {/* Services as Mini Cards */}
<div className="flex flex-wrap justify-start gap-2">
  {services.map((service, index) => (
    <div
      key={index}
      className={`px-3 py-1.5 transition-transform duration-300 border rounded-md shadow hover:scale-105 hover:shadow-md ${
        colors[index % colors.length]
      }`}
      style={{
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "13px",
        lineHeight: "18px",
        letterSpacing: "0.01em",
        transform: `rotate(${index % 2 === 0 ? "-3deg" : "3deg"})`,
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
