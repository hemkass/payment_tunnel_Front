/* @type {import('next').NextConfig}
const nextConfig = { swcMinify: true };

module.exports = nextConfig; */
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    swcMinify: false,
  },
};

module.exports = nextConfig;
