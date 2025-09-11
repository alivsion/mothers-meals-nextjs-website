import nextPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === "development", // PWA disabled in dev
  buildExcludes: [/middleware-manifest\.json$/, /app-build-manifest\.json$/], // exclude broken manifests
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
};

export default withPWA(nextConfig);
