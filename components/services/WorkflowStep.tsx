import React from "react";

interface WorkflowStepProps {
  step: number;
  title: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

export const WorkflowStep = ({ step, title, icon, isLast }: WorkflowStepProps) => {
  return (
    <div className="flex flex-col items-center text-center relative">
      {/* Icon Circle */}
      <div className="relative z-10 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
        {icon}
      </div>

      {/* Step Badge */}
      <div className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
        Step {step}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg">{title}</h3>

      {/* Connector Line */}
      {!isLast && (
        <div
          className="absolute top-8 left-1/2 h-0.5 bg-gray-300 -translate-x-1/2 hidden md:block"
          style={{ width: 'calc(100% + 2rem)' }}
        />
      )}
    </div>
  );
};
