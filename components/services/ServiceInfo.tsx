"use client";

import React from "react";

interface ServiceInfoProps {
  text: string;
  maxWidth?: string; // optional for controlling width if needed
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ text, maxWidth }) => {
  return (
    <section className="py-[120px] px-[100px] mx-auto max-w-7xl">
      <p
        className="w-full text-[36px] font-normal leading-[44px] tracking-[0.015em] text-gray-800"
        style={{
          fontFamily: "Satoshi",
          maxWidth: maxWidth || "100%", // fallback to full width
        }}
      >
        {text}
      </p>
    </section>
  );
};

export { ServiceInfo };
