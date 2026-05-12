import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/pbc-proposal-static",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
