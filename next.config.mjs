/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/mothers-meals-nextjs-website',
  assetPrefix: '/mothers-meals-nextjs-website/',
};

export default  nextConfig;
