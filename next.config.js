/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: ["localhost", "dsbgeneralconstruction-images-videos.s3.amazonaws.com", "dsbgeneralconstruction-api-production.up.railway.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
}

module.exports = nextConfig
