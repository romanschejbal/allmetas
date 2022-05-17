/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
  eslint: {
    dirs: ['src'],
  },
};
