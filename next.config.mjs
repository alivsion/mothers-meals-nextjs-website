import nextPWA from "next-pwa";
import { CacheFirst, NetworkFirst } from "workbox-strategies";

const runtimeCaching = [
  // Cache static assets
  {
    urlPattern: /\/_next\/static\/.*/,
    handler: 'CacheFirst',
    options: { cacheName: 'static-resources' },
  },
  {
    urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
    handler: 'CacheFirst',
    options: { cacheName: 'google-fonts' },
  },
  // Cache all pages (HTML)
  {
    urlPattern: /.*/, // all other requests
    handler: 'NetworkFirst',
    options: {
      cacheName: 'pages',
      networkTimeoutSeconds: 10,
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60, // 1 day
      },
      cacheableResponse: { statuses: [0, 200] },
    },
  },
];

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
