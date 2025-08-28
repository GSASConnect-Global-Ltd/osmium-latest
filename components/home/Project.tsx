"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { StaticImageData } from "next/image";

// Import project images
import solarEnergyImg from "@/assets/solar-energy-project.jpg";
import smartGridImg from "@/assets/smart-grid-project.jpg";
import constructionImg from "@/assets/construction-build-project.jpg";
import learningImg from "@/assets/learning-tech-project.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  image: StaticImageData; // ✅ Correct type for Next.js images
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
  <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition duration-300">
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={project.image.src} // ✅ StaticImageData includes `.src`
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
      <p className="text-gray-600 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.keywords.map((keyword) => (
          <span
            key={keyword}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
          >
            {keyword}
          </span>
        ))}
      </div>
      <button className="flex items-center gap-2 text-black font-medium hover:underline">
        View Project
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
      isActive
        ? "bg-black text-white"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
    }`}
  >
    {category.name}
  </button>
);

export const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("energy");

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Impactful Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We design and deliver solutions in AI, Energy, XR, and more -
            powering Africa&apos;s growth in the digital age.
          </p>
        </div>

        {/* Categories */}
        <div className="bg-gray-100 rounded-xl p-2 mb-12 max-w-md mx-auto">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <CategoryTab
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {currentCategory?.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* See All Projects */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 border border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition">
            See All {currentCategory?.name} Projects
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
