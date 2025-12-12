/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization configuration for Amplify
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
