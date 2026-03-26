/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/", // z głównej strony
        destination: "/kobieta", // na /kobieta
        permanent: true, // 308 redirect (SEO-friendly)
      },
    ];
  },

  images: {
    unoptimized: process.env.NODE_ENV === "development", // Wyłącza optymalizację tylko w dev
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "fashion-shop-backend.up.railway.app",
      },
    ],
  },
};

export default nextConfig;
