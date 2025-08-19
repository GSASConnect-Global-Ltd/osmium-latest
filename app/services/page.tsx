import { 
  Bot, 
  Cpu, 
  Gamepad2, 
  Code, 
  Leaf, 
  Glasses, 
  Home,
  MessageCircle,
  PenTool,
  Wrench,
  Rocket,
  Headphones
} from "lucide-react";
import { ServiceCard } from "@/components/services/ServiceCard";
import { WorkflowStep } from "@/components/services/WorkflowStep";

const Services = () => {
  const services = [
    {
      title: "AI & Robotics",
      description: "We design and deploy AI-powered robots for automation, healthcare, and manufacturing. Services include custom algorithm development, hardware integration, and testing.",
      benefits: "Increased efficiency, reduced costs.",
      example: "Built a warehouse robot using computer vision.",
      icon: <Bot className="h-6 w-6 text-[var(--foreground)]" />
    },
    {
      title: "Digital Twin Technology",
      description: "Virtual models mirroring physical assets for simulation and optimization in industries like aerospace and energy.",
      benefits: "Real-time monitoring, predictive analytics.",
      example: "Digital twin for wind turbines to forecast failures.",
      icon: <Cpu className="h-6 w-6 text-[var(--foreground)]" />
    },
    {
      title: "Game Development",
      description: "End-to-end game creation, including concept art, coding, and multiplayer features using tools like Godot.",
      benefits: "Engaging user experiences, cross-platform compatibility.",
      example: "Developed a VR adventure game.",
      icon: <Gamepad2 className="h-6 w-6 text-[var(--foreground)]" />
    },
    {
      title: "Software Engineering",
      description: "Bespoke software solutions, from web/apps to cloud systems, emphasizing security and scalability.",
      benefits: "Streamlined operations.",
      example: "Enterprise CRM with AI integrations.",
      icon: <Code className="h-6 w-6 text-[var(--foreground)]" />
    },
    {
      title: "Renewable Energies",
      description: "Tech for solar, wind, and bioenergy, including IoT sensors and data analytics for optimization.",
      benefits: "Eco-friendly, cost-saving.",
      example: "AI system for solar panel efficiency.",
      icon: <Leaf className="h-6 w-6 text-[var(--foreground)]" />
    },
    {
      title: "Extended Reality",
      description: "AR/VR/MR applications for training, marketing, and entertainment.",
      benefits: "Immersive interactions.",
      example: "AR app for virtual home tours.",
      icon: <Glasses className="h-6 w-6 text-[var(--foreground)]" />
    },
    {
      title: "Smart Homes Concept",
      description: "Integrated systems for automation, security, and energy management using voice AI and sensors.",
      benefits: "Convenient, sustainable living.",
      example: "App-controlled home ecosystem.",
      icon: <Home className="h-6 w-6 text-[var(--foreground)]" />
    }
  ];

  const workflowSteps = [
    { step: 1, title: "Consultation", icon: <MessageCircle className="h-8 w-8 text-[var(--foreground)]" /> },
    { step: 2, title: "Design", icon: <PenTool className="h-8 w-8 text-[var(--foreground)]" /> },
    { step: 3, title: "Development", icon: <Wrench className="h-8 w-8 text-[var(--foreground)]" /> },
    { step: 4, title: "Deployment", icon: <Rocket className="h-8 w-8 text-[var(--foreground)]" /> },
    { step: 5, title: "Support", icon: <Headphones className="h-8 w-8 text-[var(--foreground)]" /> }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(135deg, rgba(var(--foreground-rgb),0.7), rgba(var(--foreground-rgb),0.5)), url('/hero-services.jpg')` 
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-[var(--foreground)]">
            Our Services: Tailored Tech Solutions
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed text-[var(--foreground)]">
            From AI-driven robotics to sustainable smart homes.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Our Comprehensive Services</h2>
            <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              Click on any service below to explore detailed information about our capabilities, 
              benefits, and real-world applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-[var(--footer-bg)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">How We Work</h2>
            <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              Our proven 5-step process ensures successful project delivery from concept to completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {workflowSteps.map((step, index) => (
              <WorkflowStep 
                key={index} 
                {...step} 
                isLast={index === workflowSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--foreground)] text-[var(--background)]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Let Us Discuss Your Needs</h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with our team 
            and discover how we can help accelerate your business with cutting-edge technology.
          </p>
          <button className="px-8 py-4 text-lg font-semibold rounded-lg bg-[var(--background)] text-[var(--foreground)] hover:bg-gray-200 transition-colors">
            Start Your Project Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
