/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = '/Portfolio'; // Make sure this matches your GitHub repository name exactly

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '', // Removed trailing slash for consistency
};

export default nextConfig;
