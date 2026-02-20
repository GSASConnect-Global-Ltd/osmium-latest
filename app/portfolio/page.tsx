"use client"; // this ensures everything runs only on the client

import Hero from "@/components/portfolio/Hero";
import Portfolio from "@/components/portfolio/Project";
import CTASection from "@/components/home/CTA";

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <CTASection />
    </>
  );
}
