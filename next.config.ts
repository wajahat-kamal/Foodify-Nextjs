/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // ✅ allow Unsplash
      "plus.unsplash.com",   // optional (some images come from here)
      "source.unsplash.com"  // optional
    ],
  },
};

module.exports = nextConfig;
