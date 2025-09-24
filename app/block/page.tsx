import Hero from "@/components/services/Hero";
import { ServiceInfo } from "@/components/services/ServiceInfo";
import ServiceSection from "@/components/services/ServiceSection";
import Service from "@/components/services/Service";
import CTASection from "@/components/home/CTA";

const servicesDetailData = [
  {
    title: "Decentralized Applications (dApps)",
    description:
      "We design and build secure, scalable decentralized applications tailored for finance, supply chain, healthcare, and more.",
  },
  {
    title: "Smart Contracts",
    description:
      "Automate trust with audited smart contracts that reduce intermediaries and enforce business logic on-chain.",
  },
  {
    title: "Crypto Wallet & Custody",
    description:
      "Develop secure, user-friendly wallets and custody solutions with multi-chain support and strong key-management best practices.",
  },
  {
    title: "Blockchain Strategy & Compliance",
    description:
      "From tokenomics to regulatory readiness, we help you create a viable blockchain strategy and navigate compliance and risk.",
  },
];

const serviceData = [
  {
    title: "Decentralized Finance (DeFi)",
    description:
      "Build lending platforms, DEXs, and staking solutions that expand financial access while prioritizing security and liquidity.",
    image:
      "/block/block1.jpg",
  },
  {
    title: "Supply Chain Transparency",
    description:
      "Track goods end-to-end with immutable ledgers and verifiable provenance to reduce fraud and improve traceability.",
    image:
      "/block/block2.jpg",
  },
  {
    title: "NFT Platforms & Marketplaces",
    description:
      "Create minting, marketplace, and royalty mechanics for digital collectors, artists, and in-game economies.",
    image:
      "/block/block3.png",
  },
  {
    title: "Enterprise Blockchain Solutions",
    description:
      "Design permissioned networks, private ledgers, and integration layers for enterprises needing scalability and data privacy.",
    image:
      "/block/block2.jpg",
  },
];

const Services = () => {
  return (
    <>
      <Hero
        tag="Blockchain"
        headline="Powering the Next Era of Digital Trust"
        description="We harness blockchain to build decentralized, transparent, and secure solutions that redefine industries and empower individuals."
        backgroundImage="/block/block-hero.jpg"
        buttonText="Explore Blockchain Solutions"
        buttonLink="#"
        width="900px"
      />

      <ServiceInfo
        text="Traditional systems often suffer from inefficiencies, high costs, and lack of transparency. Blockchain enables automation, auditability, and new business models—without sacrificing security."
        maxWidth="900px"
      />

      <ServiceSection
        heading={{
          main: "Blockchain Solutions ",
          highlight: " That Drive Real Impact",
        }}
        subtitle="Whether you’re building financial products, NFTs, or enterprise-grade systems, our blockchain expertise helps you design, build, and scale with confidence."
        services={servicesDetailData}
      />

      <Service heading="Blockchain in Action" services={serviceData} />

      <CTASection />
    </>
  );
};

export default Services;
