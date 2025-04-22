/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.gettywallpapers.com", "s3-alpha-sig.figma.com", "randomuser.me", "192.168.10.147", "192.168.40.76", "*"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
