// app/about/page.tsx
"use client";

import Image from "next/image";
import africaImage from "@/assets/african-innovation.jpg";

const Main = () => {
  const values = [
    {
      title: "Innovation with Purpose",
      description: "Every solution solves real problems.",
    },
    {
      title: "Sustainable Growth",
      description: "Building for the long-term future of Africa.",
    },
    {
      title: "Community First",
      description: "Empowering local communities through technology.",
    },
    {
      title: "Excellence Always",
      description: "Delivering world-class solutions with African heart.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-6 py-20 mx-auto lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image with timeline overlay */}
          <div className="relative w-full max-w-[610px] h-[649px] rounded-2xl overflow-hidden shadow-hero mx-auto">
            <Image
              src={africaImage}
              alt="African Innovation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/80" />

            {/* Timeline */}
            <div className="absolute inset-0 flex flex-col justify-end px-8 pb-12 space-y-4 text-white">
              {[
                {
                  year: "2022",
                  text: "ORREL founded to drive Africa’s digital and sustainable future",
                },
                { year: "2023", text: "Launched XR Labs for immersive education." },
                {
                  year: "2024",
                  text: "Deployed smart energy microgrids and automation pilots.",
                },
                {
                  year: "2025",
                  text: "Expanding across fintech, robotics, and global partnerships.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between pt-2 border-t border-white/30"
                >
                  <p className="font-satoshi font-bold text-[20px] leading-[24px] tracking-[0.01em]">
                    {item.year}
                  </p>
                  <p className="ml-4 font-satoshi text-[16px] leading-[24px] tracking-[0.01em] max-w-[320px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text + CTA */}
          <div className="space-y-8 lg:pl-6">
            <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
              <p
                className="mb-4 text-[48px] leading-[58px] tracking-[0.02em] font-[200] text-foreground"
                style={{ fontFamily: "PP Editorial New" }}
              >
                <span className="text-[#00C896] italic">Shaping the Future </span>
                <br />
                Step by Step
              </p>
              <p
                className="text-[16px] leading-[24px] tracking-[0.01em] font-normal text-muted-foreground"
                style={{ fontFamily: "Satoshi" }}
              >
                Our milestones tell a story of growth, resilience, and a relentless drive to
                position Africa at the forefront of global innovation.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button
                className="w-[163px] h-[56px] px-6 py-4 text-base font-semibold text-black transition-all shadow-md rounded-xl hover:shadow-lg"
                style={{ backgroundColor: "#37D181" }}
              >
                Partner with us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-africa-warm py-28">
        <div className="container max-w-6xl px-6 mx-auto lg:px-12">
          {/* Heading */}
          <div className="mb-20 text-center">
            <p
              className="font-extralight text-[48px] leading-[58px] tracking-[0.02em] text-foreground"
              style={{ fontFamily: "PP Editorial New" }}
            >
              Our Values
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col justify-between p-6 transition-all duration-300 border border-gray-200 bg-gradient-card shadow-card hover:shadow-hero rounded-2xl"
              >
                <h3
                  className="mb-3 text-foreground"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "28.8px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container max-w-5xl px-6 mx-auto lg:px-12">
          <p
            className="text-primary-foreground"
            style={{
              fontFamily: "Satoshi",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "43.2px",
              letterSpacing: "0.01em",
              color: "#13492D",
            }}
          >
            Our Vision is to position Africa as a global leader in digital innovation and
            sustainability.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
