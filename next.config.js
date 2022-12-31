/** @type {import('next').NextConfig} */
/* agregar dominio para traer imagenes de un lugar externo */
/* module.exports = withPWA({
  reactStrictMode: false,
  images: {
    domains: ["placeimg.com"],
    unoptimized: true,
  },
}); */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeimg.com"],
    unoptimized: true,
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  mode: "production",
  disable: false,
});
module.exports = withPWA(nextConfig);
