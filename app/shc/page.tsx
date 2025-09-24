import Hero from "@/components/services/Hero";
import { ServiceInfo } from "@/components/services/ServiceInfo";
import ServiceSection from "@/components/services/ServiceSection";
import Service from "@/components/services/Service";
import AdvantageSection from "@/components/services/AdvantageSection";
import CTASection from "@/components/home/CTA";

const features = [
  {
    icon: "wifi",
    title: "Seamless Connectivity",
    description: "Your devices, appliances, and systems communicate flawlessly, creating a unified living experience.",
  },
  {
    icon: "shield",
    title: "Enhanced Security",
    description: "Protect your home with AI-driven monitoring, real-time alerts, and smart access control.",
  },
  {
    icon: "sun",
    title: "Energy Efficiency",
    description: "Smart lighting, HVAC, and energy monitoring save costs while reducing environmental impact.",
  },
];

const servicesDetailData = [
  {
    title: "Intelligent Lighting and Climate Control",
    description:
      "Automate your lighting and air conditioning based on presence, time of day, or weather—balancing comfort with efficiency.",
  },
  {
    title: "Voice and App Control",
    description:
      "Control every device in your home through simple voice commands or a single mobile app dashboard.",
  },
  {
    title: "Smart Security and Surveillance",
    description:
      "Integrate cameras, motion sensors, and door locks to receive instant alerts and monitor your home remotely.",
  },
  {
    title: "Energy Usage Monitoring",
    description:
      "Track real-time energy usage across appliances, receive insights, and optimize to lower bills and carbon footprint.",
  },
];

const serviceData = [
  {
    title: "Smart Living Rooms",
    description:
      "Create personalized entertainment hubs with voice-controlled TVs, immersive sound systems, and ambient lighting.",
    image: "https://images.unsplash.com/photo-1600607687565-cd4f95b6a8b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Connected Kitchens",
    description:
      "Experience kitchens where appliances talk to each other. Get recipe suggestions, automate grocery lists, and track food freshness.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Smart Bedrooms",
    description:
      "Automate curtains, lights, and thermostats to create a personalized sleep environment tailored to your lifestyle.",
    image: "https://images.unsplash.com/photo-1600488995691-3c8c00f87e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Home Security & Outdoor Systems",
    description:
      "Smart locks, connected cameras, and automated outdoor lighting ensure your family and property are always safe.",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
];

const Services = () => {
  return (
    <>
      <Hero
        tag="Smart Home Concept"
        headline="Experience the Future of Connected Living"
        description="Transform your home into a smart ecosystem—intelligent, secure, and energy-efficient—designed to adapt to your lifestyle."
        backgroundImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        buttonText="Book a Consultation"
        buttonLink="#"
        width="900px"
      />

      <ServiceInfo
        text="Homes are evolving from static spaces into adaptive environments. Traditional systems waste energy and lack flexibility. Smart homes solve this by connecting devices, automating tasks, and giving you full control—whether you’re inside or halfway across the world."
        maxWidth="900px"
      />

      <ServiceSection
        heading={{ main: "Smart Homes Built Around ", highlight: "Your Lifestyle" }}
        subtitle="We design intelligent home systems that bring comfort, security, and efficiency into everyday life. Every smart home we build is tailored to how you live, ensuring convenience without compromise."
        services={servicesDetailData}
      />

      <Service
        heading="Transform Every Corner of Your Home"
        services={serviceData}
      />

      <AdvantageSection
        heading="Why Choose Our Smart Home Solutions?"
        subtitle="We deliver more than devices—we create connected experiences that adapt to your needs, reduce costs, and give peace of mind. Your home becomes smarter, safer, and more sustainable."
        features={features}
      />

      <CTASection />
    </>
  );
};

export default Services;
