import { Settings, Layers, LineChart } from "lucide-react";


import Hero from "@/components/services/Hero";
import { ServiceInfo } from "@/components/services/ServiceInfo"
import ServiceSection from "@/components/services/ServiceSection";
import Service from "@/components/services/Service";
import AdvantageSection from "@/components/services/AdvantageSection";
import CTASection from "@/components/home/CTA";
  

const features = [
  {
    icon: "gear",
    title: "Custom-Built, Not Off-the-Shelf",
    description: "We design solutions for your specific problem, not force your problem into a generic product.",
  },
  {
    icon: "wand",
    title: "Full Stack Experience",
    description: "From the AI brain to the robotic body, we control the entire stack, ensuring seamless integration and performance."
  },
  {
     icon: "chart",
    title: "Focus on ROI & Impact",
    description: "We prioritize solutions that deliver measurable improvements in efficiency, cost savings, and safety.",
  },
];



const servicesDetailData = [
  {
    title: "Precision and Automation",
    description:
      "Automate repetitive, complex, or high-precision assembly, welding, painting, or packaging tasks with unwavering consistency.",
    
  },
  {
    title: "Predictive Maintenance",
    description:
      "Use AI-powered analytics to predict equipment failures before they happen, minimizing unplanned downtime and maximizing asset lifespan.",
    
  },

  {
    title: "Intelligent Inspection & Quality Control ",
    description:
      "Deploy computer vision systems to perform automated, millimeter-accurate quality checks at speeds impossible for the human eye, drastically reducing defects.",
    
  },

    {
    title: "24/7 Operational Readiness",
    description:
      "Robots work tirelessly, enabling round-the-clock production and fulfilling orders without being constrained by shifts or fatigue.",
  },
  
];

const serviceData = [
  {
    title: "Manufacturing and assembly",
    description:
      "Revolutionize production lines with robotic arms for assembly, material handling, and precision machining. Increase output, improve quality, and protect workers from hazardous tasks.",
    image: "/ai/ai1.png",
  },
  {
    title: "Logistics and Warehousing",
    description:
      "Automate sorting, picking, packing, and palletizing in warehouses and distribution centers. Accelerate order fulfillment and reduce operational costs.",
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
    image: "/ai/ai4.png",
  },
  
];




const Services = () => {
  
  return (
    <>
       <Hero
      tag="AI and Robotics"
      headline="Intelligent Automation for African Industry"
      description="We design and deploy bespoke AI and robotic systems that automate complex tasks, enhance precision, and unlock new levels of productivity, safety, and data-driven insight."
      backgroundImage="/ai/ai-hero.png"
      buttonText="Partner with us"
      buttonLink="/contact"
    />
      
      <ServiceInfo
        text="Manual processes are prone to error, slow, and unsafe for high-risk tasks. 
        Scaling production or maintaining consistent quality is a constant challenge, 
        limiting competitiveness and the ability to innovate on the global stage."
        maxWidth="900px"
      />
      <ServiceSection
      heading={{ main: "From Manual Tasks to", highlight: "Intelligent System" }}
      subtitle="We build integrated AI and robotics solutions that tackle your most
        difficult operational challenges. Our systems work alongside human
        talent to augment capabilities, ensure pinpoint accuracy, and operate
        reliably in demanding environments."
      services={servicesDetailData}
    />
       <Service
      heading="Transformative Energy Across Sectors"
      services={serviceData}
    />
       <AdvantageSection
      heading="The ORREL Advantage in AI & Robotics"
      subtitle="Our strength lies in tailoring global technology to local contexts. We focus on robust, maintainable, and cost-effective solutions that deliver a clear return on investment and are built to thrive in the African operational environment."
      features={features}
    />
      <CTASection />
      

    </>
  );
};

export default Services;
