/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization configuration for Amplify
  images: {
    unoptimized: true,
  },
  // Enable standalone output for AWS Amplify
  output: 'standalone',
}

module.exports = nextConfig
