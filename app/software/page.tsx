
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
    title: "Gamified STEM Labs",
    description:
      "We transform standard curriculum experiments into captivating VR challenges. Students conduct chemistry, physics, and biology activities in a safe, immersive digital environment, free from cost and safety constraints.",
    
  },
  {
    title: "Experiential Learning",
    description:
      "Learners interact with complex systems—from engineering assemblies to historical events— fostering deep understanding through doing, not just reading.",
    
  },

  {
    title: "Industrial Procedure Training",
    description:
      "Create risk-free training simulations for high-stakes industrial environments. Practice equipment operation, safety protocols, and emergency responses without real-world danger.",
    
  },

    {
    title: "Performance Analytics",
    description:
      "Track engagement and mastery in real-time. Our platforms provide educators and trainers with data on student progress, knowledge gaps, and skill proficiency.",
  },
  
];

const serviceData = [
  {
    title: "Primary & Secondary STEM Education",
    description:
      "Our flagship VR school platform allows students to perform every required science experiment in the curriculum without a physical lab. We turn learning into an adventure.",
    image: "/digital/digital1.png",
  },
  {
    title: "University & Vocational Engineering Labs",
    description:
      "Provide engineering students with unlimited access to expensive, complex machinery through digital twins and gamified simulations. They can design, test, fail, and optimize in a virtual sandbox.",
    image: "/digital/digital2.png",
  },

  {
    title: "Industrial Safety & Skills Training",
    description:
      "Train employees on standard operating procedures, safety protocols, and equipment handling for manufacturing, energy, and construction sectors in a zero-risk environment.",
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
      tag="Software Engineering"
      headline="Engineering the Digital Backbone of Africa's Future"
      description="We design and develop robust, scalable, and secure software applications, platforms, and APIs that form the core of modern digital transformation for businesses and institutions. "
      backgroundImage="/dwt/dwt-hero.png"
      buttonText="Partner with us"
      buttonLink="#"
      width="900px" 
    />
      
      <ServiceInfo
        text="Off-the-shelf software often fails to meet unique business needs, leading to inefficiencies, security gaps, and missed opportunities. Legacy systems are costly to maintain and cannot scale to meet modern demands, locking organizations into outdated ways of working."
        maxWidth="900px"
      />
      <ServiceSection
      heading={{ main: "Bespoke Software, ", highlight: " Engineered for Scale and Impact" }}
      subtitle="We are full-stack experts who architect and build custom software tailored to your exact challenges. We prioritize clean code, security, and scalability from the ground up, ensuring your digital foundation drives growth, not holds it back."
      services={servicesDetailData}
    />
       <Service
      heading="Revolutionizing How Africa Learns and Trains"
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
