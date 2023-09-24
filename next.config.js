/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['marmi-mainardi.s3.amazonaws.com']
  }
}

module.exports = nextConfig
