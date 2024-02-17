/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost','https://drive.google.com'],
    formats:['image/webp','image/avif']
  },
  reactStrictMode: true,
}

module.exports = nextConfig
