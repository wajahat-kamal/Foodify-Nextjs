// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"], // 👈 add all allowed external image domains here
  },
};

export default nextConfig;
