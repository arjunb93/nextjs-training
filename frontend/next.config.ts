import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  allowedDevOrigins: ['nextjs.localhost', '*.nextjs.localhost'],
  
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },

  // Turbopack configuration for Next.js 16+
  turbopack: {
    resolveAlias: {},
  },
};

export default nextConfig;
