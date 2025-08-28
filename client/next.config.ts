/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/website-tasheer',
  assetPrefix: '/website-tasheer/',
  images: {
    unoptimized: true, // مهم لـ GitHub Pages
  },
};

export default nextConfig;