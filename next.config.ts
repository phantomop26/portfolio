/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export (next export)
  trailingSlash: true, // required for proper routing on GitHub Pages
  images: {
    unoptimized: true, // disables next/image optimization for static export
  },
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint errors during `next build`
  },
};

export default nextConfig;
