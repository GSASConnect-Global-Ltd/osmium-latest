import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "osmium-blog-admin-backend.onrender.com",
        pathname: "/uploads/**", // allow all images under /uploads
      },
    ],
  },
};

export default nextConfig;
