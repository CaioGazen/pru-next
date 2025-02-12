/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // <=== enables static exports
  reactStrictMode: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
