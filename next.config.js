/** @type {import('next').NextConfig} */
/* agregar dominio para traer imagenes de un lugar externo */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["placeimg.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
