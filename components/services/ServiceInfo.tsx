"use client";

import React from "react";

interface ServiceInfoProps {
  text: string;
  maxWidth?: string; // optional for controlling width if needed
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ text}) => {
  return (
    <section
      className="flex flex-col items-start gap-[10px] mx-auto"
      style={{
        width: "1440px",
        padding: "120px 80px",
      }}
    >
      <p
        className="text-[36px] font-normal leading-[44px] tracking-[0.015em] text-gray-800 w-full"
        style={{ fontFamily: "Satoshi" }}
      >
        {text}
      </p>
    </section>
  );
};

export { ServiceInfo };
