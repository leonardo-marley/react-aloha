/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost','drive.google.com'],
    formats:['image/webp','image/avif'],
    remotePaterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com'
      }
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
