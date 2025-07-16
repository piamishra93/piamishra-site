/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['substackcdn.com'], // Allow Substack images
  },
  reactStrictMode: true,
}

module.exports = nextConfig 