/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

    output: 'export',
  images: { unoptimized: false },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.'
    };
    config.resolve.fallback = {
      ...config.resolve.fallback,
      encoding: false,
      fs: false,
      path: false
    };
    return config;
  }
};

module.exports = nextConfig;
