
import type { NextConfig } from "next";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://orrelng.com';
const API_HOSTNAME = new URL(API_BASE_URL).hostname;

const nextConfig: NextConfig = {
  // ❌ Remove these lines:
  // basePath: '/admin',
  // assetPrefix: '/admin/',
  
  // ✅ Keep only this:
  basePath: '',  // Empty string for root
  
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
    },
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "source.unsplash.com",
    },
    {
      protocol: "https",
      hostname: API_HOSTNAME,
    },
    {
      protocol: "http",
      hostname: "localhost",
      port: "5000",
      pathname: "/uploads/**",
    },
    {
      protocol: "https",
      hostname: "orrelng.com",
    },
  ],
},


  
  trailingSlash: true,
  
  env: {
    NEXT_PUBLIC_API_BASE_URL: API_BASE_URL,
  },
};

export default nextConfig;
