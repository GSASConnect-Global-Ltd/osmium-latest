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
    title: "Manufacturing and assembly",
    description:
      "Revolutionize production lines with robotic arms for assembly...",
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
      tag="AI & Robotics"
      headline="Intelligent Automation for African Industries"
      description="We design and deploy bespoke AI and robotics systems that streamline operations, boost productivity, and drive sustainable growth across Africa’s industrial landscape."
      backgroundImage="/ai/ai-hero.png"
      buttonText="Partner with us"
      buttonLink="/contact"
    />
      <div>
      <ServiceInfo
        text="Manual processes are prone to error, slow, and unsafe for high-risk tasks. 
        Scaling production or maintaining consistent quality is a constant challenge, 
        limiting competitiveness and the ability to innovate on the global stage."
        maxWidth="900px"
      />

      <ServiceInfo
        text="Our robotics systems solve this by ensuring precision, speed, and reliability at scale."
      />
    </div>
      <ServiceSection
      heading={{ main: "From Manual Tasks to", highlight: "Intelligent System" }}
      subtitle="We build integrated AI and robotics solutions that tackle your most
        difficult operational challenges. Our systems work alongside human
        talent to augment capabilities, ensure pinpoint accuracy, and operate
        reliably in demanding environments."
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
