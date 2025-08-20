// app/page.tsx
"use client";

import { useState } from "react";
import { ArrowRight, Award, Clock, Users } from "lucide-react";

// Import images (replace with /public paths if needed)
import portfolioHero from "@/assets/portfolio-hero.jpg";
import projectAiRobotics from "@/assets/project-ai-robotics.jpg";
import projectDigitalTwin from "@/assets/project-digital-twin.jpg";
import projectGameDev from "@/assets/project-game-dev.jpg";
import projectSmartHome from "@/assets/project-smart-home.jpg";

/* ----------------------------- Button Component ----------------------------- */
const Button = ({
  children,
  onClick,
  variant = "default",
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition";
  const sizes: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };
  const variants: Record<string, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

/* ----------------------------- Types ----------------------------- */
interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: { src: string };
  tags: string[];
  techStack: string[];
  client: string;
  date: string;
  duration: string;
  results: string;
}

interface ProjectCardProps extends Project {
  onViewDetails: (id: string) => void;
}

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

/* ----------------------------- Project Card ----------------------------- */
const ProjectCard = ({
  id,
  title,
  description,
  image,
  tags,
  techStack,
  client,
  date,
  onViewDetails,
}: ProjectCardProps) => (
  <div className="group overflow-hidden border rounded-lg bg-white shadow hover:shadow-lg transition cursor-pointer">
    <div className="aspect-video overflow-hidden">
      <img
        src={image.src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-6 space-y-4">
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-1">
          <span className="text-xs text-gray-500">Tech:</span>
          {techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs text-gray-800 font-medium">
              {tech}
            </span>
          ))}
          {techStack.length > 3 && (
            <span className="text-xs text-gray-500">
              +{techStack.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{client}</span>
          <span>{date}</span>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onViewDetails(id)}
        className="w-full"
      >
        View Details
      </Button>
    </div>
  </div>
);

/* ----------------------------- Project Filter ----------------------------- */
const ProjectFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) => (
  <div className="flex flex-wrap justify-center gap-3 mb-12">
    {categories.map((category) => (
      <Button
        key={category}
        variant={activeCategory === category ? "default" : "outline"}
        onClick={() => onCategoryChange(category)}
        className={`px-6 py-2 text-sm font-medium ${
          activeCategory === category
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        {category}
      </Button>
    ))}
  </div>
);

/* ----------------------------- Project Modal ----------------------------- */
const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!isOpen || !project) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={project.image.src}
          alt={project.title}
          className="w-full h-64 object-cover rounded"
        />
        <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.fullDescription}</p>
        <div className="mt-4">
          <span className="text-sm text-gray-500">Client:</span>{" "}
          {project.client}
        </div>
        <div className="mt-2">
          <span className="text-sm text-gray-500">Duration:</span>{" "}
          {project.duration}
        </div>
        <div className="mt-2">
          <span className="text-sm text-gray-500">Results:</span>{" "}
          {project.results}
        </div>
      </div>
    </div>
  );
};

/* ----------------------------- Main Page ----------------------------- */
export default function Page() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = [
    "All",
    "AI & Robotics",
    "Digital Twin",
    "Game Development",
    "Software Engineering",
    "Renewable Energies",
    "Extended Reality",
    "Smart Homes",
  ];

  const projects: Project[] = [
    {
      id: "1",
      title: "AI Robot for Factory Automation",
      description: "Reduced downtime by 40% using ML algorithms...",
      fullDescription:
        "Developed an intelligent robotic system that revolutionized factory operations...",
      image: projectAiRobotics,
      tags: ["AI & Robotics"],
      techStack: ["Python", "ROS", "TensorFlow", "OpenCV", "Docker"],
      client: "Manufacturing Corp",
      date: "2024",
      duration: "8 months",
      results: "$2M annual cost savings.",
    },
    {
      id: "2",
      title: "Virtual Factory Digital Twin",
      description: "Created a digital twin model for predictive maintenance...",
      fullDescription:
        "Built a sophisticated digital twin platform for predictive analytics...",
      image: projectDigitalTwin,
      tags: ["Digital Twin"],
      techStack: ["Unity", "C#", "Azure IoT", "Python", "SQL Server"],
      client: "Industrial Solutions Ltd",
      date: "2024",
      duration: "12 months",
      results: "35% maintenance efficiency improvement.",
    },
    {
      id: "3",
      title: "AR Mobile Puzzle Game",
      description:
        "Mobile puzzle game with AR elements that garnered 500K+ downloads.",
      fullDescription:
        "Developed an innovative augmented reality puzzle game blending real-world environments...",
      image: projectGameDev,
      tags: ["Game Development"],
      techStack: ["Unity", "ARCore", "ARKit", "C#", "Blender"],
      client: "Gaming Studio Alpha",
      date: "2023",
      duration: "10 months",
      results: "500K+ downloads in first 6 months.",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeCategory));

  const selectedProjectData = selectedProject
    ? projects.find((p) => p.id === selectedProject) || null
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${portfolioHero.src})` }}
        />
        <div className="relative z-10 px-6">
          <h1 className="text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-2xl text-gray-700 mb-8">Real-World Innovations</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we have transformed ideas into cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Explore our diverse portfolio of innovative solutions
            </p>
          </div>
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <ProjectCard
                key={p.id}
                {...p}
                onViewDetails={(id) => setSelectedProject(id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <Award className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <div className="text-5xl font-bold">100+</div>
            <p className="text-lg text-gray-600">Projects Completed</p>
          </div>
          <div>
            <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <div className="text-5xl font-bold">7</div>
            <p className="text-lg text-gray-600">Industries Served</p>
          </div>
          <div>
            <Clock className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <div className="text-5xl font-bold">98%</div>
            <p className="text-lg text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          See how we can help transform your ideas into real results.
        </p>
        <Button size="lg">
          Get Started Today
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>

      {/* Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProjectData}
      />
    </div>
  );
}
