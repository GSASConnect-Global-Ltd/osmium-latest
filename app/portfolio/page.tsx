// app/page.tsx
"use client";

import Hero from "@/components/portfolio/Hero";
import Portfolio from "@/components/portfolio/Project";
import CTASection from "@/components/home/CTA";

export default function Page() {
  return (
    <>
      <Hero />
      <Portfolio />
      <CTASection />
    </>
  );
}
