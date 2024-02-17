/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost','https://drive.google.com'],
    formats:['image/webp','image/avif'],
    remotePaterns: [
      {
        protocol: 'https',
        hostname: 'https://drive.google.com'
      }
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
