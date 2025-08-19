import Image from 'next/image';
import React, { FC } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  className?: string;
}

export const TeamMember: FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  image,
  className = '',
}) => {
  // Generate initials if no image is provided
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('');

  return (
    <div
      className={`group border border-gray-200 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-blue-500 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          initials
        )}
      </div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-blue-500 font-medium mb-3">{role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
};
