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
        ],
    },
}

module.exports = nextConfig
