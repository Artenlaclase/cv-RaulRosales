

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'], // añade dominios de imágenes si es necesario
  },
};

module.exports = nextConfig;