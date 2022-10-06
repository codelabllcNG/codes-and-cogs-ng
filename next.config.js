/** @type {import('next').NextConfig} */
const nextConfig = {
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
    domains: ['orgsapi.com'],
  },

  

}

module.exports = nextConfig
 