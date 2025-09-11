"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from "next/image";

// Import project images
import solarEnergyImg from "@/assets/solar-energy-project.jpg";
import smartGridImg from "@/assets/smart-grid-project.jpg";
import constructionImg from "@/assets/construction-build-project.jpg";
import learningImg from "@/assets/learning-tech-project.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  keywords: string[];
}

interface Category {
  id: string;
  name: string;
  projects: Project[];
}

const categories: Category[] = [
  {
    id: "energy",
    name: "Energy",
    projects: [
      {
        id: "solar-farms",
        title: "Solar Energy Farms",
        description:
          "Large-scale solar installations providing clean energy to communities across West Africa, reducing carbon footprint and energy costs.",
        image: solarEnergyImg,
        keywords: [
          "Solar Power",
          "Renewable Energy",
          "Sustainability",
          "Green Tech",
        ],
      },
      {
        id: "smart-grid",
        title: "Smart Grid Infrastructure",
        description:
          "Advanced electrical grid systems with AI-powered monitoring and optimization for efficient energy distribution.",
        image: smartGridImg,
        keywords: ["Smart Grid", "AI Monitoring", "Energy Efficiency", "IoT"],
      },
    ],
  },
  {
    id: "build",
    name: "Build",
    projects: [
      {
        id: "sustainable-construction",
        title: "Sustainable Construction",
        description:
          "Innovative building techniques using local materials and modern technology for eco-friendly urban development.",
        image: constructionImg,
        keywords: [
          "Sustainable Building",
          "Green Construction",
          "Innovation",
          "Urban Development",
        ],
      },
      {
        id: "smart-infrastructure",
        title: "Smart Infrastructure",
        description:
          "Digital infrastructure solutions that integrate IoT sensors and data analytics for better city management.",
        image: constructionImg,
        keywords: ["Smart Cities", "Infrastructure", "IoT", "Data Analytics"],
      },
    ],
  },
  {
    id: "learn",
    name: "Learn",
    projects: [
      {
        id: "digital-literacy",
        title: "Digital Literacy Programs",
        description:
          "Comprehensive technology education programs empowering youth with essential digital skills for the future.",
        image: learningImg,
        keywords: [
          "Education",
          "Digital Skills",
          "Youth Empowerment",
          "Technology Training",
        ],
      },
      {
        id: "ai-workshops",
        title: "AI & Machine Learning Workshops",
        description:
          "Hands-on workshops teaching AI concepts and practical machine learning applications in African context.",
        image: learningImg,
        keywords: [
          "AI Education",
          "Machine Learning",
          "Workshops",
          "Tech Skills",
        ],
      },
    ],
  },
  {
    id: "connect",
    name: "Connect",
    projects: [
      {
        id: "rural-connectivity",
        title: "Rural Internet Access",
        description:
          "Expanding internet connectivity to remote areas through innovative satellite and wireless technologies.",
        image: smartGridImg,
        keywords: [
          "Internet Access",
          "Rural Development",
          "Connectivity",
          "Digital Inclusion",
        ],
      },
      {
        id: "tech-community",
        title: "Tech Community Hub",
        description:
          "Creating collaborative spaces where tech professionals and entrepreneurs can network and innovate together.",
        image: learningImg,
        keywords: [
          "Community Building",
          "Networking",
          "Innovation Hub",
          "Collaboration",
        ],
      },
    ],
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="overflow-hidden transition duration-300 group rounded-xl">
    <div className="aspect-[16/10] overflow-hidden rounded-t-xl">
      <Image
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-6 space-y-4">
      <p
        className="text-gray-900 font-bold text-lg sm:text-xl md:text-[24px] leading-snug"
        style={{ fontWeight: 700 }}
      >
        {project.title}
      </p>
      <p
        className="text-sm text-gray-600 sm:text-base"
        style={{
          fontFamily: "Satoshi",
          fontWeight: 400,
          lineHeight: "24px",
        }}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.keywords.map((keyword) => (
          <span
            key={keyword}
            className="px-3 py-1 text-xs text-gray-700 bg-gray-100 rounded-full sm:text-sm md:text-base"
            style={{ fontFamily: "Satoshi" }}
          >
            {keyword}
          </span>
        ))}
      </div>
      <button
        className="flex items-center gap-2 text-sm text-green-700 sm:text-base"
        style={{ fontFamily: "Satoshi", fontWeight: 700 }}
      >
        View Project
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);

const CategoryTab = ({
  category,
  isActive,
  onClick,
}: {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex-shrink-0 w-[90px] sm:w-[108px] h-[40px] sm:h-[44px] rounded-[100px] flex items-center justify-center px-4 py-2 text-sm sm:text-base font-light transition-colors ${
      isActive
        ? "bg-black text-white"
        : "bg-transparent text-gray-700 hover:bg-white"
    }`}
  >
    {category.name}
  </button>
);

export const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("energy");

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <section className="py-[80px] sm:py-[100px] md:py-[120px] bg-gray-50">
      <div className="px-4 sm:px-6 md:px-[100px] mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 text-center md:mb-16" style={{ maxWidth: "505px" }}>
          <p
            className="mb-4 sm:mb-6 font-extralight ppEditorial text-2xl sm:text-3xl md:text-[48px] leading-tight md:leading-[58px]"
            style={{ fontFamily: "PP Editorial New", letterSpacing: "0.02em" }}
          >
            Our Impactful <span className="italic text-green-600">Projects</span>
          </p>
          <p
            className="mx-auto text-gray-600 text-sm sm:text-base md:text-[16px]"
            style={{ fontFamily: "Satoshi", fontWeight: 400 }}
          >
            We design and deliver solutions in AI, Energy, XR, and more — powering
            Africa&apos;s growth in the digital age.
          </p>
        </div>

        {/* Categories */}
        <div className="max-w-full md:max-w-[448px] h-auto md:h-[60px] mx-auto mb-8 md:mb-12 bg-gray-100 rounded-[100px] flex gap-2 sm:gap-[10px] px-2 py-2 overflow-x-auto">
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:gap-8 md:grid-cols-2">
          {currentCategory?.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* See All Projects */}
        <div className="text-center">
          <button className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 font-satoshi font-light text-sm sm:text-[16px] text-black border-2 border-black rounded-lg transition-colors duration-300 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black whitespace-nowrap">
            See all Projects
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
