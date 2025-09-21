"use client";

import Image from "next/image";
import React from "react";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

interface ServicesProps {
  heading: string;
  services: ServiceItem[];
}

const Services: React.FC<ServicesProps> = ({ heading, services }) => {
  // Decide grid columns based on number of services
  const gridCols =
    services.length === 1
      ? "grid-cols-1 justify-items-center"
      : services.length === 2
      ? "grid-cols-1 sm:grid-cols-2 justify-items-center"
      : services.length === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <section className="relative min-h-screen px-[100px] py-20 overflow-hidden bg-[#37D181]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-primary/10 blur-3xl animate-float" />
      <div
        className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-accent/10 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative w-full">
        {/* Main Heading */}
        <div className="mb-16 text-center">
          <p
            className="mx-auto text-center text-[48px] leading-[56px] tracking-[0.01em] font-extralight ppEditorial"
            style={{ maxWidth: "533px" }}
          >
            {heading}
          </p>
        </div>

        {/* Card Layout */}
        <div className={`grid gap-16 ${gridCols}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center overflow-hidden bg-gray-100 rounded-[32px] gap-3 p-2 w-full max-w-sm"
            >
              {/* Service Image */}
              <Image
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-[217px] rounded-[24px]"
                width={382}
                height={217}
              />

              {/* Service Content */}
              <div
                className="flex flex-col santoshi flex-1 bg-white rounded-[24px]"
                style={{ padding: "24px" }}
              >
                <p
                  className="mb-[24px] text-center"
                  style={{
                    color: "#10150C",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                >
                  {service.title}
                </p>

                <p
                  className="pt-[5px]"
                  style={{
                    color: "#7C7B7C",
                    fontFamily: "Satoshi",
                    fontWeight: 200,
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
