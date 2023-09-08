/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
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
            {
                protocol: "https",
                hostname: "plus.unsplash.com",
            },
        ],
    },

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        })
        return config
    },
}

module.exports = nextConfig
