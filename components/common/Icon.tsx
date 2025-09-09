// components/common/Icon.tsx
"use client";

import Image from "next/image";

interface IconProps {
  name: string; // filename without extension
  alt?: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, alt = "", size = 24, className }) => {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={alt || name}
      width={size}
      height={size}
      className={className}
    />
  );
};

export default Icon;
