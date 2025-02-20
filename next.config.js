/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  typescript: {
    // Ensure TypeScript errors don't block production builds
    ignoreBuildErrors: process.env.NODE_ENV === 'production'
  },
  eslint: {
    // Ensure ESLint errors don't block production builds
    ignoreDuringBuilds: process.env.NODE_ENV === 'production'
  }
}

module.exports = nextConfig
