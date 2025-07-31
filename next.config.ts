/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily ignore ESLint during builds for Vercel deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Compress responses
  compress: true,
  
  // Enable optimized images for Vercel
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
