
/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: false, // PWA auch im Development aktiv
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    serverActions: {}, // ✅ korrektes Format
  },
};

module.exports = withPWA(nextConfig);
