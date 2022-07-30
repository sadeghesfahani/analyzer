/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname
    }
}

module.exports = nextConfig
