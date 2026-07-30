import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
       protocol: 'https',
       hostname: 'cdn.s3waas.gov.in',
      },
    ],
  },
};

export default nextConfig;
