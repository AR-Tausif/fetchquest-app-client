/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.gettywallpapers.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
