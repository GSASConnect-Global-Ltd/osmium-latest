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
  return (
    <section className="relative min-h-screen px-6 py-20 overflow-hidden bg-[#37D181]">
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
            className="mx-auto text-center text-[48px] leading-[56px] tracking-[0.01em]"
            style={{
              fontFamily: "PP Editorial New",
              fontWeight: 200,
              width: "533px",
            }}
          >
            {heading}
          </p>
        </div>

        {/* Card Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center overflow-hidden bg-gray-100 rounded-[32px] gap-3 p-2 w-full"
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
              <div className="flex flex-col flex-1 bg-white rounded-[24px] p-6">
                <h3
                  className="mb-2 text-gray-900"
                  style={{
                    fontFamily: "PP Editorial New",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "28px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-gray-600"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
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
