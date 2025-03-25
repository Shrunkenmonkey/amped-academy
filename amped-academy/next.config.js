/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['img.youtube.com'],
    unoptimized: process.env.NODE_ENV !== 'production',
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
