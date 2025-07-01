/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['antd'],
  },
  transpilePackages: ['antd'],
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;