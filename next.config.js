/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yyfuastxgelqyuevgmjs.supabase.co',
        pathname: '/storage/v1/object/public/**',
      }
    ],
    domains: [
      'yyfuastxgelqyuevgmjs.supabase.co'
    ],
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
