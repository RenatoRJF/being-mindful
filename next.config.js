/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  experimental: {
    optimizePackageImports: ['@next/font']
  }
};

module.exports = nextConfig; 