
import Hero from "@/components/services/Hero";
import { ServiceInfo } from "@/components/services/ServiceInfo"
import ServiceSection from "@/components/services/ServiceSection";
import Service from "@/components/services/Service";
import AdvantageSection from "@/components/services/AdvantageSection";
import CTASection from "@/components/home/CTA";
 



const features = [
  {
    icon: "chart",
    title: "Focus on Integration",
    description: "We ensure the digital twin is fed by live data from your sensors and systems for a true live view.",
  },
  {
    icon: "gear",
    title: "Tailored to your needs",
    description: "We build solutions that are robust and effective even with specific local infrastructure challenges in mind.",
  },
  {
    icon: "vector",
    title: "End to End service",
    description: "From data acquisition and 3D modeling to software development and analytics, we handle the entire process.",
  },
];




const servicesDetailData = [
  {
    title: "Predictive Performance Analysis",
    description:
      "Run simulations to foresee how your system will perform under different conditions, preventing costly failures and optimizing output.",
    
  },
  {
    title: "Virtual Training and Onboarding",
    description:
      "Train operators, engineers, and students on complex equipment in a completely safe, virtual environment. Drastically reduce training costs and risks.",
    
  },

  {
    title: "Remote Monitoring and Control",
    description:
      "Monitor the status and health of remote or inaccessible assets in real-time through their digital twin, enabling proactive maintenance.",
    
  },

    {
    title: "Design and Prototyping Validation",
    description:
      "Test and validate new designs, concepts, and modifications in the digital world first, eliminating the need for costly physical prototypes.",
  },
  
];

const serviceData = [
  {
    title: "Manufacturing and Industrial Plants",
    description:
      "Create digital twins of entire production lines to optimize workflow, simulate bottlenecks, and train new operators without stopping production.",
    image: "/digital/digital1.png",
  },
  {
    title: "Education and Research",
    description:
      "Power the next generation of engineers. Students can interact with, disassemble, and experiment on complex digital twins of machinery, from engines to power grids, in an immersive VR environment.",
    image: "/digital/digital2.png",
  },

  {
    title: "Renewable Energy Systems",
    description:
      "Model and monitor solar farms or hybrid energy systems. Predict energy output based on weather data, simulate component failures, and plan maintenance schedules virtually.",
    image: "/digital/digital3.png",
  },

    {
    title: "RSmart City and Infrastructure Planning",
    description:
      "Plan urban infrastructure projects, model traffic flow, and assess the environmental impact of new developments before a single foundation is poured.",
    image: "/digital/digital4.png",
  },
  
];




const Services = () => {
  
  return (
    <>
       <Hero
      tag="Digital Twin Technology"
      headline="See the Future of Your Operations Before You Build It"
      description="Create a dynamic, virtual replica of your physical assets to simulate, predict, and optimize performance—all before implementing changes in the real world. "
      backgroundImage="/dwt/dwt-hero.png"
      buttonText="Request a Demo"
      buttonLink="#"
      width="900px" 
    />
      
      <ServiceInfo
        text="Traditional design and operational processes are linear and siloed. Unexpected downtime costs millions. Training on complex machinery is dangerous and expensive. Without a way to simulate and predict, every change is a gamble."
        maxWidth="900px"
      />
      <ServiceSection
      heading={{ main: "A Digital Crystal Ball for ", highlight: " Your Business" }}
      subtitle="We build living digital replicas of your products, processes, and systems. These twins sync with real-world data, allowing you to run simulations, test scenarios, and uncover insights that were previously impossible, saving time, money, and resources."
      services={servicesDetailData}
    />
       <Service
      heading="Transformative Energy Across Sectors"
      services={serviceData}
    />
       <AdvantageSection
      heading="More Than a Model—A Strategic Partner"
      subtitle="Our digital twins are not just static 3D models; they are data-rich, interactive decision-making tools. We focus on building twins that are directly tied to your key performance indicators and business outcomes, ensuring you get a clear return on investment."
      features={features}
    />
      <CTASection />
      

    </>
  );
};

export default Services;
