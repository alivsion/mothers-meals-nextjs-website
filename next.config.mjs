/** @type {import('next').NextConfig} */
const repoName = "mothers-meals-nextjs-website";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  // ❌ remove assetPrefix (causes 404 in gh-pages)
};

export default nextConfig;
