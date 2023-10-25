/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats:['image/webp','image/avif']
  },
  reactStrictMode: true,
}

module.exports = nextConfig
