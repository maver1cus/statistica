/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const api = process.env.API_HOST || 'http://localhost:3001';

const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [{ source: '/api/v1/:path*', destination: `${api}/:path*` }],
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: false,
};

module.exports = nextConfig;
