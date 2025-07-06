import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Vercel specific configurations (optional, remove if not deploying to Vercel)
  // experimental: {
  //   speedInsights: true, 
  //   analyticsId: process.env.VERCEL_ANALYTICS_ID, // You'd set this in your Vercel env variables
  // },
};

export default nextConfig;
