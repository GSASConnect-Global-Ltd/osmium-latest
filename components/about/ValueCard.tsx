import React, { FC, ReactNode } from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export const ValueCard: FC<ValueCardProps> = ({
  title,
  description,
  icon,
  className = '',
}) => {
  return (
    <div
      className={`text-center group transition-all duration-300 hover:scale-105 ${className}`}
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};
