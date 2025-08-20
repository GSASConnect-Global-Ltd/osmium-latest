"use client";

import { Calendar, User, ExternalLink, X } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    tags: string[];
    techStack: string[];
    client: string;
    date: string;
    duration: string;
    challenges: string;
    results: string;
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  // ✅ Always call useEffect, but run logic only if modal is open
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-start justify-between border-b pb-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-md bg-gray-100 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 mt-6">
          {/* Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Section */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Project Overview
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Challenges & Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Results & Impact
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.results}
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Project Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500">Client:</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500">Date:</span>
                    <span className="font-medium">{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md border border-gray-300 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
