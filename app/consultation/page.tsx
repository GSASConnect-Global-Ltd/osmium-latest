import Hero from "@/components/services/Hero";
import { ServiceInfo } from "@/components/services/ServiceInfo";
import ServiceSection from "@/components/services/ServiceSection";
import Service from "@/components/services/Service";
import CTASection from "@/components/home/CTA";

const servicesDetailData = [
  {
    title: "Business Strategy Alignment",
    description:
      "We help you define clear digital strategies aligned with your core objectives, ensuring technology investments deliver measurable ROI.",
  },
  {
    title: "Technology Roadmapping",
    description:
      "Plan the next 3–5 years of your digital journey with structured roadmaps that balance innovation, scalability, and cost.",
  },
  {
    title: "Process Optimization",
    description:
      "Identify inefficiencies, streamline operations, and introduce automation that improves productivity and reduces overhead.",
  },
  {
    title: "Change Management and Training",
    description:
      "Support your teams in adopting new tools and workflows through tailored training and onboarding programs.",
  },
];

const serviceData = [
  {
    title: "Startups and SMEs",
    description:
      "We guide early-stage companies in refining business models, scaling operations, and leveraging affordable digital solutions.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Large Enterprises",
    description:
      "Assist corporations in digital transformation initiatives, legacy modernization, and change management strategies.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Public Sector",
    description:
      "Support government and NGOs with digital policy implementation, IT governance, and citizen-facing service improvements.",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Education & Nonprofits",
    description:
      "Advise institutions on digital tools for remote learning, fundraising platforms, and resource management systems.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
];

const Services = () => {
  return (
    <>
      <Hero
        tag="Consultation"
        headline="Guiding Businesses Through Digital Transformation"
        description="Our consultation services empower organizations to make informed technology decisions, align strategy with execution, and achieve long-term impact."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        buttonText="Schedule a Consultation"
        buttonLink="#"
        width="900px"
      />

      <ServiceInfo
        text="Organizations often invest in technology without clear alignment to business goals, resulting in wasted resources and slow adoption. Our consultation bridges this gap, turning digital ambition into tangible results."
        maxWidth="900px"
      />

      <ServiceSection
        heading={{ main: "Tailored Consulting ", highlight: " for Lasting Impact" }}
        subtitle="We combine deep technical expertise with business acumen to provide consultation that is practical, actionable, and future-proof."
        services={servicesDetailData}
      />

      <Service
        heading="Who We Consult For"
        services={serviceData}
      />

      <CTASection />
    </>
  );
};

export default Services;
