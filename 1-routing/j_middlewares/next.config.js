/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "geekflare.com" }],
  },
};

module.exports = nextConfig;
