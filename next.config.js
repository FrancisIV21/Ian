/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Replace the old domains configuration with remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all domains, or specify specific ones
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      }
    ],
    // Optional: Add formats you want to support
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig