import { Settings, Layers, LineChart } from "lucide-react";


import Hero from "@/components/services/Hero";
import { ServiceInfo } from "@/components/services/ServiceInfo"
import ServiceSection from "@/components/services/ServiceSection";
import Service from "@/components/services/Service";
import AdvantageSection from "@/components/services/AdvantageSection";
import CTASection from "@/components/home/CTA";
 

import  Ai1  from "@/assets/ai/ai1.png"; 
import  Ai2  from "@/assets/ai/ai2.png"; 
import  Ai3  from "@/assets/ai/ai3.png"; 

const features = [
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: "Custom-Built, Not Off-the-Shelf",
    description: "We design solutions for your specific problem...",
  },
  {
    icon: <Layers className="w-6 h-6 text-white" />,
    title: "Full Stack Experience",
    description: "From the AI brain to the robotic body...",
  },
  {
    icon: <LineChart className="w-6 h-6 text-white" />,
    title: "Focus on ROI & Impact",
    description: "We prioritize solutions that deliver measurable improvements...",
  },
];



const servicesData = [
  {
    title: "Custom Solar and Hybrid Systems",
    description:
      "From off-grid residential setups to large-scale grid-tied industrial solutions with battery backup and generator integration.",
    image: "/ai/ai1.png",
  },
  {
    title: "Logistics and Warehousing",
    description:
      "Automate sorting, picking, packing, and palletizing in warehouses...",
    image: "/ai/ai2.png",
  },

  {
    title: "Agricultural and Food Processing",
    description:
      "Implement automated sorting, grading, and processing of agricultural produce. Enhance yield and reduce post-harvest waste through intelligent automation.",
    image: "/ai/ai3.png",
  },

    {
    title: "Research and Development",
    description:
      "Partner with our AI specialists to prototype and develop custom robotic solutions for unique challenges, from medical devices to advanced material handling.",
    image: "/ai/ai3.png",
  },
  
];




const Services = () => {
  
  return (
    <>
       <Hero
      tag="Renewable Energy."
      headline="Powering Africa’s Future, Sustainably"
      description="We deliver renewable energy systems and solutions that power industries, homes, offices, farms and more sustainably. "
      backgroundImage="/renewable/renewable-hero.png"
      buttonText="Partner with us"
      buttonLink="/contact"
    />
      
      <ServiceInfo
        text="Unstable grids and soaring energy costs are stifling African innovation and growth. Businesses lose revenue to downtime, communities remain in the dark and development is held back by a lack of reliable, affordable power."
        maxWidth="900px"
      />
      <ServiceSection
      heading={{ main: "Reliable, Clean and Intelligent ", highlight: "Energy" }}
      subtitle="We design integrated renewable energy systems that provide uninterrupted power, slash electricity costs, and promote sustainability, all built for Africa’s unique demands"
      services={servicesData}
    />
       <Service
      heading="Transformative Energy Across Sectors"
      services={servicesData}
    />
       <AdvantageSection
      heading="The ORREL Advantage in AI & Robotics"
      subtitle="Our strength lies in tailoring global technology to local contexts..."
      features={features}
    />
      <CTASection />
      

    </>
  );
};

export default Services;
