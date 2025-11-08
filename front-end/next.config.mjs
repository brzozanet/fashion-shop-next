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
};

export default nextConfig;
