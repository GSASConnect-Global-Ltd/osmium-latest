import Hero from "@/components/services/Hero";
import { ServiceInfo } from "@/components/services/ServiceInfo";
import ServiceSection from "@/components/services/ServiceSection";
import Service from "@/components/services/Service";
import AdvantageSection from "@/components/services/AdvantageSection";
import CTASection from "@/components/home/CTA";

const features = [
  {
    icon: "chart",
    title: "Scientific Accuracy",
    description:
      "We apply physics-based modeling and validated numerical methods to ensure results closely reflect real-world performance.",
  },
  {
    icon: "gear",
    title: "Tailored Applications",
    description:
      "Our simulations are focused on your industry challenges—automotive safety, aerodynamics, corrosion resistance, or sustainable energy systems.",
  },
  {
    icon: "vector",
    title: "Complete Simulation Workflow",
    description:
      "From problem definition and modeling to simulation, analysis, and interpretation, we provide end-to-end support.",
  },
];

const servicesDetailData = [
  {
    title: "Finite Element Analysis (Crash Worthiness Test)",
    description:
      "Simulate and analyze how structures behave under crash conditions. FEA helps identify weaknesses, improve material choices, and enhance safety designs before costly physical testing.",
  },
  {
    title: "Computational Fluid Dynamics (Racing Car Drag)",
    description:
      "Use CFD to optimize aerodynamic performance by minimizing drag and turbulence. Enhance speed, fuel efficiency, and design of high-performance racing vehicles.",
  },
  {
    title: "Molecular Dynamics Simulation (Marine Corrosion Protection)",
    description:
      "Investigate materials at the atomic scale to design coatings and treatments that withstand corrosion in harsh marine environments, extending equipment lifetime.",
  },
  {
    title: "Chemical Process Modeling (Biomass Pyrolysis)",
    description:
      "Model and optimize biomass pyrolysis processes to maximize energy yield, improve efficiency, and support sustainable energy production.",
  },
];

const serviceData = [
  {
    title: "Crash Safety Engineering",
    description:
      "Leverage finite element simulations to predict structural failure and improve vehicle crash worthiness without relying solely on physical crash tests.",
    image:
      "https://images.unsplash.com/photo-1599939549860-9e25f70e4cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // crash test car
  },
  {
    title: "Aerodynamic Optimization",
    description:
      "Apply CFD to racing car design, analyzing airflow and drag forces to boost speed and efficiency in motorsport applications.",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // racing car aerodynamics
  },
  {
    title: "Marine Engineering",
    description:
      "Use molecular dynamics to develop advanced corrosion protection strategies for ships, pipelines, and offshore structures.",
    image:
      "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // marine ship
  },
  {
    title: "Sustainable Energy",
    description:
      "Simulate biomass pyrolysis processes for renewable energy, reducing emissions and optimizing conversion efficiency.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // renewable energy / biomass
  },
];

const Services = () => {
  return (
    <>
      <Hero
        tag="Modeling and Simulation"
        headline="Advanced Simulations for Modern Engineering"
        description="We specialize in applying advanced modeling and simulation techniques—FEA, CFD, Molecular Dynamics, and Process Modeling—to solve critical engineering challenges."
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" // futuristic engineering simulation
        buttonText="Request a Demo"
        buttonLink="#"
        width="900px"
      />

      <ServiceInfo
        text="Physical experiments are expensive and time-consuming. With focused modeling and simulation, we provide accurate insights into crash worthiness, aerodynamics, corrosion resistance, and biomass conversion—helping you innovate smarter and faster."
        maxWidth="900px"
      />

      <ServiceSection
        heading={{
          main: "Our Core Focus Areas in ",
          highlight: "Modeling and Simulation",
        }}
        subtitle="We concentrate on four high-impact domains that drive innovation and efficiency across industries."
        services={servicesDetailData}
      />

      <Service heading="Applications of Our Expertise" services={serviceData} />

      <AdvantageSection
        heading="Why Our Simulations Stand Out"
        subtitle="Our focused approach ensures scientifically accurate, industry-relevant insights that directly support innovation and decision-making."
        features={features}
      />

      <CTASection />
    </>
  );
};

export default Services;
