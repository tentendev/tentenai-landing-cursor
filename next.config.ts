import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Handle language-specific URL parameters
      {
        source: '/:path*',
        destination: '/:path*',
        has: [
          {
            type: 'query',
            key: 'lang',
            value: '(?<lang>en|zh|zh-cn|ja|ko|ar)'
          }
        ]
      }
    ]
  },
  
  async redirects() {
    // In production, these would handle domain-to-domain redirects
    // For development/staging, we use URL parameters
    return []
  },

  // Note: i18n config is not used with App Router - we handle this manually

  // Allow external images from Unsplash
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
