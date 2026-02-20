"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    type: "content",
    subtitle: "inside ORREL",
    title: "Our Blog",
    description: "Our news, latest updates, and resources on ORREL",
    background: null, // plain background
  },
  {
    type: "image",
    src: "/xr/xr1.png",
    subtitle: "AI & Robotics",
    title: "Shaping the Future of Automation",
    description: "Explore how ORREL leverages artificial intelligence and robotics to solve Africa’s most pressing challenges.",
  },
  {
    type: "image",
    src: "/xr/xr2.png",
    subtitle: "Renewable Energy",
    title: "Engineering a Sustainable Tomorrow",
    description: "Discover our clean energy solutions in solar, wind, and hybrid systems powering communities across Africa.",
  },
  {
    type: "image",
    src: "/xr/xr3.png",
    subtitle: "Extended Reality",
    title: "Transforming Learning & Experiences",
    description: "From VR training modules to immersive AR apps, ORREL is creating extended realities that bridge imagination and impact.",
  },
  {
    type: "image",
    src: "/xr/xr4.png",
    subtitle: "Innovation & Research",
    title: "Case Studies & Breakthroughs",
    description: "Dive into our case studies showcasing innovations in computational modeling, simulation, and digital transformation.",
  },
];


const HeroSlide = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 py-20 overflow-hidden text-white bg-black">
      {/* Carousel Items */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* If slide is image */}
          {slide.type === "image" && (
            <>
              <Image
                src={slide.src!}
                alt={`Blog hero image ${index}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </>
          )}

          {slide.type === "image" && (
  <>
    <Image
      src={slide.src!}
      alt={`Blog hero image ${index}`}
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center">
      <p
        className="font-normal text-base tracking-[0.16px] text-gray-300"
        style={{ fontFamily: "Satoshi" }}
      >
        {slide.subtitle}
      </p>
      <h2
        className="mx-auto ppEditorial font-thin 
                       text-[28px] sm:text-[48px] md:text-[72px] 
                       leading-[36px] sm:leading-[60px] md:leading-[86px] 
                       tracking-[0.02em] sm:tracking-[0.04em]
                       text-center 
                       bg-gradient-to-r from-[#EBFAF2] to-[#FFFFFF] bg-clip-text text-transparent"
      >
        {slide.title}
      </h2>
      <p
        className="max-w-2xl mt-4 text-lg leading-relaxed text-gray-300 md:text-xl"
        style={{ fontFamily: "Satoshi" }}
      >
        {slide.description}
      </p>
    </div>
  </>
)}

        </div>
      ))}
    </section>
  );
};

export default HeroSlide;
