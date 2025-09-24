
import Hero from "@/components/services/Hero";
import { ServiceInfo } from "@/components/services/ServiceInfo"
import ServiceSection from "@/components/services/ServiceSection";
import Service from "@/components/services/Service";

import CTASection from "@/components/home/CTA";
 



const servicesDetailData = [
  {
    title: "Custom Web and Mobile Application",
    description:
      "Build user-centric, high-performance web and mobile apps that deliver exceptional experiences and drive engagement.",
    
  },
  {
    title: "API Integration and Development",
    description:
      "We create powerful APIs and seamless integrations that connect your existing tools and unlock your data's potential.",
    
  },

  {
    title: "Claude Native and Dev-Ops Integration",
    description:
      "Design and deploy scalable, resilient systems on cloud infrastructure (AWS, Azure, GCP) with automated CI/CD pipelines for rapid, reliable updates.",
    
  },

    {
    title: "Data Engineering and Analytics",
    description:
      "Transform raw data into actionable intelligence. We build pipelines, warehouses, and dashboards that inform strategic decision-making.",
  },
  
];

const serviceData = [
  {
    title: "Enterprise SaaS Platforms",
    description:
      "Develop comprehensive Software-as-a-Service solutions that streamline operations, from custom ERPs and CRMs to specialized industry tools, all built for the cloud.",
    image: "/software/software1.jpg",
  },
  {
    title: "Fintech and Digital Payment Systems",
    description:
      "Engineer secure, reliable, and compliant financial technology platforms, including payment gateways, wallet systems, and lending platforms, like our own OrrellFX.",
    image: "/software/software2.jpg",
  },

  {
    title: "IOT and Smart system Integration",
    description:
      "Build the central software platforms that power Smart Homes, Smart Farms, and Industrial IoT, collecting sensor data and enabling automation and control.",
    image: "/software/software3.jpg",
  },

    {
    title: "Legacy System Modernization",
    description:
      "Breathe new life into outdated applications. We refactor, re-architect, and migrate old systems to modern, secure, and maintainable cloud-based platforms.",
    image: "/software/software3.jpg",
  },
  
];




const Services = () => {
  
  return (
    <>
       <Hero
      tag="Software Engineering"
      headline="Engineering the Digital Backbone of Africa's Future"
      description="We design and develop robust, scalable, and secure software applications, platforms, and APIs that form the core of modern digital transformation for businesses and institutions. "
      backgroundImage="/software/software-hero.jpg"
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
       
      <CTASection />
      

    </>
  );
};

export default Services;
