// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   images: {
//     // allow specific domains directly
//     domains: ["images.unsplash.com", "source.unsplash.com"],
//     // allow patterns for more fine-grained control
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '5000', // your backend port
//         pathname: '/uploads/**',
//       },
//       {
//         protocol: "https",
//         hostname: "osmium-blog-admin-backend.onrender.com",
//         pathname: "/uploads/**", // allow all images under /uploads
//       },
//     ],
//   },
// };

// export default nextConfig;


// import type { NextConfig } from "next";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://orrelng.com/api';
// const API_HOSTNAME = new URL(API_BASE_URL).hostname;

// const nextConfig: NextConfig = {
//   basePath: '/admin',
//   assetPrefix: '/admin/',
  
//   // ✅ Use environment variable for API hostname
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: API_HOSTNAME, // Dynamic from env
//       },
//       {
//         protocol: "http",
//         hostname: "localhost", // keep localhost for dev
//       },
//       // Add any other domains you need
//       {
//         protocol: "https",
//         hostname: "orrelng.com",
//       },
//     ],
//   },
  
//   trailingSlash: true,
  
//   // ✅ Add environment variables to be available at build time
//   env: {
//     NEXT_PUBLIC_API_BASE_URL: API_BASE_URL,
//   },
// };

// export default nextConfig;

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
        hostname: API_HOSTNAME,
      },
      {
        protocol: "http",
        hostname: "localhost",
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
