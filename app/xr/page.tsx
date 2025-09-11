
import Hero from "@/components/services/Hero";
import { ServiceInfo } from "@/components/services/ServiceInfo"
import ServiceSection from "@/components/services/ServiceSection";
import Service from "@/components/services/Service";
import CTASection from "@/components/home/CTA";
 
const servicesDetailData = [
  {
    title: "Immersive Training Simulations",
    description:
      "Create safe, repeatable, and cost-effective training for high-risk or complex procedures in VR.",
    
  },
  {
    title: "Augmented reality and support",
    description:
      "Overlay step-by-step instructions, schematics, and data onto physical equipment for maintenance, repair, and assembly via AR glasses or tablets.",
    
  },

  {
    title: "Virtual Design and Prototyping",
    description:
      "Visualize and interact with 3D designs at scale before any physical prototype is built, streamlining the design review process.",
    
  },

    {
    title: "Interactive Experiences and Storytelling",
    description:
      "Create engaging AR marketing campaigns, virtual showrooms, and immersive educational stories that captivate audiences."
  },
  
];

const serviceData = [
  {
    title: "Education and Training",
    description:
      "Revolutionize STEM education. Students can conduct dangerous chemistry experiments in safe VR, explore historical sites in AR, or understand human anatomy through interactive 3D models.",
    image: "/xr/xr1.png",
  },
  {
    title: "Industrial Maintenance and Repair",
    description:
      "Empower field technicians with AR. Overlay instructions and expert guidance directly onto machinery to reduce errors, slash training time, and enable less experienced staff to perform complex tasks",
    image: "/xr/xr2.png",
  },

  {
    title: "Architecture, Engineering and Construction",
    description:
      "Walk through building designs at 1:1 scale before construction begins. Clients and architects can experience the space, validate designs, and identify changes early, saving vast sums of money.",
    image: "/xr/xr3.png",
  },

    {
    title: "HealthCare and Therapy",
    description:
      "Use VR for surgical simulation, medical training, and therapeutic applications like exposure therapy or pain management in a controlled, virtual environment",
    image: "/xr/xr4.png",
  },
  
];




const Services = () => {
  
  return (
    <>
       <Hero
      tag="Extended Reality (XR)"
      headline="Blur the Lines Between Imagination and Reality"
      description="We craft immersive Extended Reality (XR) experiences—Virtual, Augmented, and Mixed—that transform how you train, design, maintain, and engage with your world. "
      backgroundImage="/xr/xr-hero.png"
      buttonText="Partner with Us"
      buttonLink="#"
      width="900px" 
    />
      
      <ServiceInfo
        text="Traditional training methods can be risky, expensive, and inefficient. Complex concepts are hard to grasp in 2D, remote collaboration is frustrating, and experiencing a product or place before it's built is often impossible."
        maxWidth="900px"
      />
      <ServiceSection
      heading={{ main: "Step Inside Your Ideas with  ", highlight: " Immersive Technology" }}
      subtitle="We design and develop custom XR applications that overlay digital information onto the real world or transport users to fully simulated environments. This solves real-world problems by enhancing understanding, enabling remote collaboration, and reducing physical constraints."
      services={servicesDetailData}
    />
       <Service
      heading="Transforming Industries Through Immersion"
      services={serviceData}
    />
      <CTASection />
      

    </>
  );
};

export default Services;
