"use client";

import React from "react";

interface ServiceCard {
  title: string;
  description: string;
}

interface ServiceSectionProps {
  heading: {
    main: string;
    highlight: string; // italic colored word(s)
  };
  subtitle: string;
  services: ServiceCard[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  heading,
  subtitle,
  services,
}) => {
  return (
    <section className="relative min-h-screen px-6 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-primary/10 blur-3xl animate-float" />
      <div
        className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-accent/10 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6 mb-16 text-center">
          <p
            className="font-extralight text-[48px] leading-[58px] tracking-[0.96px] text-center"
            style={{
              fontFamily: "PP Editorial New",
              color: "var(--Foundation-Primary-Shade-Darker, #10150C)",
              width: "505px",
            }}
          >
            <span className="block">{heading.main}</span>
            <span
              className="block italic"
              style={{
                color: "var(--Foundation-Secondary-Shade-Darker, #13492D)",
                fontFamily: "PP Editorial New",
                fontSize: "48px",
                fontWeight: 200,
                lineHeight: "58px",
                letterSpacing: "0.96px",
              }}
            >
              {heading.highlight}
            </span>
          </p>

          {/* Subtitle */}
          <p
            className="text-justify text-gray-600"
            style={{
              fontFamily: "Satoshi",
              width: "634px",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Dynamic Cards */}
        <div className="grid justify-center gap-8 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 transition-all duration-500"
              style={{
                width: "300px",
                height: "385px",
                borderRadius: "16px",
                border: "1px solid #EAECE9",
                background: "#FAFAFA",
              }}
            >
              <h3
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: 700,
                  fontSize: "22px",
                  lineHeight: "30px",
                  letterSpacing: "1%",
                }}
                className="text-primary"
              >
                {service.title}
              </h3>
              <p
                className="text-muted-foreground"
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "28px",
                  letterSpacing: "0.01em",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
