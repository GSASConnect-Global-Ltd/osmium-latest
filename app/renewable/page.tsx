
import Hero from "@/components/services/Hero";
import { ServiceInfo } from "@/components/services/ServiceInfo"
import ServiceSection from "@/components/services/ServiceSection";
import Service from "@/components/services/Service";
import AdvantageSection from "@/components/services/AdvantageSection";
import CTASection from "@/components/home/CTA";
 



const features = [
  {
    icon: "vector",
    title: "End to End service",
    description: "From initial site assessment and custom design to professional installation, commissioning, and ongoing maintenance.",
  },
  {
    icon: "globe",
    title: "Global Standards",
    description: "Our solutions are designed for local conditions but adhere to international engineering and safety standards.",
  },
  {
    icon: "chart",
    title: "Focus on Impact",
    description: "We measure our success not just in kilowatts generated, but in businesses grown, communities empowered, and carbon emissions avoided.",
  },
];




const servicesDetailData = [
  {
    title: "Custom Solar and Hybrid Syatems",
    description:
      "From off-grid residential setups to large-scale grid-tied industrial solutions with battery backup and generator integration.",
    
  },
  {
    title: "Reduced Operational Cost",
    description:
      "Drastically cut your reliance on expensive and polluting diesel generators, locking in long-term energy savings.",
    
  },

  {
    title: "Uninterrupted Power Supply",
    description:
      "Ensure business continuity and operational efficiency with seamless backup power that kicks in during grid outages.",
    
  },

    {
    title: "Smart Monitoring and Analytics",
    description:
      "Test and validate new designs, concepts, and modifications in the digital world first, eliminating the need for costly physical prototypes.",
  },
  
];

const serviceData = [
  {
    title: "Manufacturing and Industrial Plants",
    description:
      "Create digital twins of entire production lines to optimize workflow, simulate bottlenecks, and train new operators without stopping production.",
    image: "/renewable/renewable1.png",
  },
  {
    title: "Education and Research",
    description:
      "Power the next generation of engineers. Students can interact with, disassemble, and experiment on complex digital twins of machinery, from engines to power grids, in an immersive VR environment.",
    image: "/renewable/renewable1.png.png",
  },

  {
    title: "Renewable Energy Systems",
    description:
      "Model and monitor solar farms or hybrid energy systems. Predict energy output based on weather data, simulate component failures, and plan maintenance schedules virtually.",
    image: "/renewable/renewable1.png",
  },

    {
    title: "RSmart City and Infrastructure Planning",
    description:
      "Plan urban infrastructure projects, model traffic flow, and assess the environmental impact of new developments before a single foundation is poured.",
    image: "/renewable/renewable1.png",
  },
  
];




const Services = () => {
  
  return (
    <>
       <Hero
      tag="Renewable Energy"
      headline="Powering Africa’s Future, Sustainably"
      description="We deliver renewable energy systems and solutions that power industries, homes, offices, farms and more sustainably.  "
      backgroundImage="/renewable/renewable-hero.png"
      buttonText="Partner with us"
      buttonLink="#"
      width="900px" 
    />
      
      <ServiceInfo
        text="Unstable grids and soaring energy costs are stifling African innovation and growth. Businesses lose revenue to downtime, communities remain in the dark and development is held back by a lack of reliable, affordable power."
        maxWidth="900px"
      />
      <ServiceSection
      heading={{ main: "Reliable, Clean and Intelligent  ", highlight: "Energy" }}
      subtitle="We design integrated renewable energy systems that provide uninterrupted power, slash electricity costs, and promote sustainability, all built for Africa’s unique demands"
      services={servicesDetailData}
    />
       <Service
      heading="Transformative Energy Across Sectors"
      services={serviceData}
    />
       <AdvantageSection
      heading="Why Partner with ORREL for Your Energy Needs?"
      subtitle=" Our approach is rooted in engineering excellence and a deep understanding of the African context. We don't just sell systems; we deliver end-to-end partnerships."
      features={features}
    />
      <CTASection />
      

    </>
  );
};

export default Services;
