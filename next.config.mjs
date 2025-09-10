import nextPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";  

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching, // now this actually works
  buildExcludes: [/middleware-manifest.json$/],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
