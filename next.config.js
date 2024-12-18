/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,

  httpAgentOptions: {
    keepAlive: true,
  },

  webpack5: true,
  fs: false,
  path: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },

  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    scrollRestoration: true,
  },

  images: {
    // domains: ['dev.codesandcogs.com'],
    domains: ["api.codesandcogs.com"],
  },

  // staticPageGenerationTimeout: 1000
};

module.exports = nextConfig;
