"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string;
  example: string;
  icon: React.ReactNode;
}

export const ServiceCard = ({ title, description, benefits, example, icon }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-r from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 text-white rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-800 transition-colors"
        >
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="p-4 space-y-4">
          <p className="text-gray-700 leading-relaxed">{description}</p>

          <div>
            <h4 className="font-medium mb-1">Benefits:</h4>
            <p className="text-gray-600">{benefits}</p>
          </div>

          <div>
            <h4 className="font-medium mb-1">Case Example:</h4>
            <p className="text-gray-600 italic">{example}</p>
          </div>

          <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Request Consultation
          </button>
        </div>
      )}
    </div>
  );
};
