/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tailwindui.com'],
  },
  env: {
    API_URL: process.env.API_URL,
  },
}

module.exports = nextConfig
