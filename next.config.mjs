/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.gettywallpapers.com", "s3-alpha-sig.figma.com", "randomuser.me"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
