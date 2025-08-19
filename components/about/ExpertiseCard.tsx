import React, { ReactNode } from 'react';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  description,
  icon,
  className = '',
}) => {
  return (
    <div
      className={`group border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-400 ${className}`}
    >
      {icon && (
        <div className="mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};
