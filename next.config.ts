import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "adasavision.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  // Enable React strict mode for better DX
  reactStrictMode: true,
};

export default nextConfig;
