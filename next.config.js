/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    optimizeFonts: true,
    images: {
        remotePatterns: [
            {
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "dsbgeneralconstruction-images-videos.s3.amazonaws.com",
            },
            {
                protocol: "https",
                hostname: "dsbgeneralconstruction-api-production.up.railway.app",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
}

module.exports = nextConfig
