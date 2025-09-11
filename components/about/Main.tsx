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
      title: "Sustainability First",
      description: "Building system that endure.",
    },
    {
      title: "Collaboration",
      description: "Progress through partnerships.",
    },
    {
      title: "Innovation with Purpose",
      description: "Every solution solves real problems.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-4 py-16 mx-auto sm:px-6 lg:px-12 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image with timeline overlay */}
          <div className="relative w-full h-[420px] sm:h-[520px] md:h-[649px] max-w-full lg:max-w-[610px] rounded-2xl overflow-hidden shadow-hero mx-auto">
            <Image
              src={africaImage}
              alt="African Innovation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/80" />

            {/* Timeline */}
            <div className="absolute inset-0 flex flex-col justify-end px-4 pb-6 space-y-4 text-white sm:px-6 md:px-8 sm:pb-10 md:pb-12">
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
                  className="flex flex-col pt-2 border-t sm:flex-row sm:items-start sm:justify-between border-white/30"
                >
                  <p className="font-satoshi font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-[0.01em]">
                    {item.year}
                  </p>
                  <p className="mt-1 sm:mt-0 sm:ml-4 font-satoshi text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-[0.01em] max-w-full sm:max-w-[320px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text + CTA */}
          <div className="space-y-8 lg:pl-6">
            <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
              <p className="mb-4 ppEditorial text-[28px] sm:text-[36px] md:text-[48px] leading-[36px] sm:leading-[46px] md:leading-[58px] tracking-[0.02em] font-[200] text-foreground">
                <span className="text-[#13492D] italic">Shaping the Future </span>
                <br />
                Step by Step
              </p>
              <p
                className="text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0.01em] font-normal text-muted-foreground"
                style={{ fontFamily: "Satoshi" }}
              >
                Our milestones tell a story of growth, resilience, and a relentless
                drive to position Africa at the forefront of global innovation.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              {/* CTA Button */}
              <button
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-4 text-black font-satoshi font-bold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-wide rounded-[12px] border border-[#f8faf9] bg-[#37D181] transition-colors duration-300 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-black"
                style={{
                  width: "auto",
                  minWidth: "fit-content",
                  fontFamily: "Satoshi",
                }}
              >
                Partner with us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
          
        <section className="py-20 bg-africa-warm sm:py-24 lg:py-28">
          <div className="container max-w-6xl px-4 mx-auto sm:px-6 lg:px-12">
            {/* Heading */}
            <div className="mb-12 text-center sm:mb-16 lg:mb-20">
              <p className="font-extralight ppEditorial text-[28px] sm:text-[36px] md:text-[48px] leading-[36px] sm:leading-[44px] md:leading-[58px] tracking-[0.02em] text-foreground">
                Our Values
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start w-full sm:w-[266px] h-auto sm:h-[254px]"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #EAECE9",
                    background: "#FFF",
                    display: "flex",
                    padding: "24px",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <h3
                    className="text-foreground text-[20px] sm:text-[24px] leading-[26px] sm:leading-[28.8px]"
                    style={{
                      fontFamily: "Satoshi",
                      fontWeight: 500,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-muted-foreground text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px]"
                    style={{
                      fontFamily: "Satoshi",
                      fontWeight: 400,
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
      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div className="container max-w-5xl px-4 mx-auto sm:px-6 lg:px-12">
          <p
            className="text-primary-foreground text-[20px] sm:text-[28px] md:text-[36px] leading-[28px] sm:leading-[36px] md:leading-[43.2px] tracking-[0.01em]"
            style={{
              fontFamily: "Satoshi",
              fontWeight: 400,
              color: "#13492D",
            }}
          >
            Our Vision <span className="text-[#717171]">is to</span> position Africa{" "}
            <span className="text-[#717171]">as a global leader</span> in digital
            innovation and sustainability.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
