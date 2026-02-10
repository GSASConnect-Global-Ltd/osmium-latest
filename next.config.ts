import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // allow specific domains directly
    domains: ["images.unsplash.com", "source.unsplash.com"],
    // allow patterns for more fine-grained control
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000', // your backend port
        pathname: '/uploads/**',
      },
      {
        protocol: "https",
        hostname: "osmium-blog-admin-backend.onrender.com",
        pathname: "/uploads/**", // allow all images under /uploads
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
