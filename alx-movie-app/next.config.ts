import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const withPWA = withPWAInit({
  dest: "puclic", // Output directory for service worker and manifest
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com", // Allow loading images from Amazon CDN
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withPWA({ ...nextConfig });
