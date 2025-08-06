// app/page.tsx
import Image from "next/image";


import { Section } from "@/components/ui/Section";

// Import images (Next.js handles these)
import aiRoboticsImg from "@/assets/ai-robotics.jpg";
import digitalTwinImg from "@/assets/digital-twin.jpg";
import gameDevImg from "@/assets/game-development.jpg";
import softwareImg from "@/assets/software-engineering.jpg";
import renewableImg from "@/assets/renewable-energy.jpg";
import xrImg from "@/assets/extended-reality.jpg";
import smartHomesImg from "@/assets/smart-homes.jpg";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">

      <Hero />

      <div id="ai-robotics">
        <Section
          title="AI & Robotics"
          description="Revolutionizing industries through intelligent automation and advanced robotic systems. Our AI-driven solutions combine machine learning, computer vision, and robotics to create autonomous systems that enhance productivity and safety across manufacturing, healthcare, and service sectors."
          image={aiRoboticsImg}
          imageAlt="AI and Robotics Technology"
          ctaText="Explore AI Solutions"
        />
      </div>

      <div id="digital-twin">
        <Section
          title="Digital Twin Technology"
          description="Creating precise digital replicas of physical systems to optimize performance, predict maintenance needs, and accelerate innovation. Our digital twin solutions enable real-time monitoring, simulation, and analysis for smart cities, industrial facilities, and complex infrastructure projects."
          image={digitalTwinImg}
          imageAlt="Digital Twin Technology"
          ctaText="Discover Digital Twins"
          reverse
        />
      </div>

      <div id="game-dev">
        <Section
          title="Game Development"
          description="Crafting immersive gaming experiences through cutting-edge technology and innovative design. From mobile games to AAA productions, we leverage advanced graphics engines, AI-driven gameplay, and cross-platform development to create engaging entertainment solutions."
          image={gameDevImg}
          imageAlt="Game Development"
          ctaText="View Our Games"
        />
      </div>

      <div id="software">
        <Section
          title="Software Engineering"
          description="Building robust, scalable software solutions that drive digital transformation. Our engineering expertise spans cloud-native applications, enterprise systems, and custom software development with a focus on performance, security, and user experience."
          image={softwareImg}
          imageAlt="Software Engineering"
          ctaText="See Our Work"
          reverse
        />
      </div>

      <div id="renewable">
        <Section
          title="Renewable Energies"
          description="Accelerating the transition to sustainable energy through innovative technology solutions. We develop smart grid systems, energy management platforms, and IoT-enabled renewable energy solutions that maximize efficiency and reduce environmental impact."
          image={renewableImg}
          imageAlt="Renewable Energy Solutions"
          ctaText="Learn About Energy"
        />
      </div>

      <div id="xr">
        <Section
          title="Extended Reality"
          description="Pushing the boundaries of reality with immersive XR experiences that blend virtual and physical worlds. Our extended reality solutions encompass VR, AR, and MR applications for training, visualization, entertainment, and collaborative work environments."
          image={xrImg}
          imageAlt="Extended Reality Technology"
          ctaText="Experience XR"
          reverse
        />
      </div>

      <div id="smart-homes">
        <Section
          title="Smart Homes Concept"
          description="Transforming living spaces into intelligent environments that adapt to user preferences and optimize comfort, security, and energy efficiency. Our smart home solutions integrate IoT devices, AI automation, and intuitive interfaces for seamless home management."
          image={smartHomesImg}
          imageAlt="Smart Homes Technology"
          ctaText="Explore Smart Living"
        />
      </div>
    </div>
  );
}
