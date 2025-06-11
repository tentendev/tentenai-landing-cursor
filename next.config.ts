import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external images from Unsplash
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
