"use client";

import { Calendar, User, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  techStack: string[];
  client: string;
  date: string;
  onViewDetails: (id: string) => void;
}

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
}: ProjectCardProps) => {
  return (
    <div className="group overflow-hidden border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Tags + Title + Description */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-md bg-gray-100 text-gray-700"
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

        {/* Tech stack + Client + Date */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="text-gray-500">Tech:</span>
            {techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="text-gray-900 font-medium">
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="text-gray-500">
                +{techStack.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{client}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => onViewDetails(id)}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
