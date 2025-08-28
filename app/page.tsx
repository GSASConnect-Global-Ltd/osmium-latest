// app/page.tsx
"use client";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/About";
import TechSection from "@/components/home/TechSection";
import { ProjectsShowcase } from "@/components/home/Project";
import CTASection from "@/components/home/CTA";
import Blog from "@/components/home/Blog";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-black transition-colors duration-300 bg-white">
      <Hero />
      <AboutSection />
      <TechSection />
      <ProjectsShowcase />
      <Blog />
      <CTASection />
    </div>
  );
}
