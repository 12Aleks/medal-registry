import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  // In Next.js 16+, Turbopack is the default for 'next dev'.
  // However, Turbopack support for polling is still evolving.
  // To ensure Hot Module Replacement (HMR) works reliably in Docker on Windows/macOS,
  // we recommend using Webpack for now. To do so, you can either:
  // 1. Omit the --turbo flag (standard behavior if not enabled by default).
  // 2. Ensure your custom webpack config is present (which often disables turbo).
  // We keep an empty turbopack object for CLI acknowledgement if needed.
  turbopack: {},
};

export default nextConfig;
