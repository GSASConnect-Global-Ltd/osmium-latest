
import Hero from "@/components/services/Hero";
import { ServiceInfo } from "@/components/services/ServiceInfo"
import ServiceSection from "@/components/services/ServiceSection";
import Service from "@/components/services/Service";

import CTASection from "@/components/home/CTA";
 



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
    image: "/game/game1.png",
  },
  {
    title: "University & Vocational Engineering Labs",
    description:
      "Provide engineering students with unlimited access to expensive, complex machinery through digital twins and gamified simulations. They can design, test, fail, and optimize in a virtual sandbox.",
    image: "/game/game2.png",
  },

  {
    title: "Industrial Safety & Skills Training",
    description:
      "Train employees on standard operating procedures, safety protocols, and equipment handling for manufacturing, energy, and construction sectors in a zero-risk environment.",
    image: "/game/game3.png",
  },

  
];




const Services = () => {
  
  return (
    <>
       <Hero
      tag="Game development"
      headline="Where Play Meets Purpose"
      description="We design and develop serious games and gamified experiences that transform learning, training, and complex tasks into engaging, effective, and memorable journeys. "
      backgroundImage="/dwt/dwt-hero.png"
      buttonText="Partner with Us"
      buttonLink="#"
      width="900px" 
    />
      
      <ServiceInfo
        text="Traditional learning and training methods often fail to capture attention or ensure knowledge retention. Complex information is easily forgotten, and monotonous tasks lead to low participation and high error rates."
        maxWidth="900px"
      />
      <ServiceSection
      heading={{ main: "Unlock Motivation Through ", highlight: "  Mastery and Play" }}
      subtitle="We harness the powerful psychological principles of game design—progression, reward, and story—to create experiences that captivate users, deepen understanding, and drive desired behaviors, whether for students or professionals."
      services={servicesDetailData}
    />
       <Service
      heading="Revolutionizing How Africa Learns and Trains"
      services={serviceData}
    />
      <CTASection />
      

    </>
  );
};

export default Services;
