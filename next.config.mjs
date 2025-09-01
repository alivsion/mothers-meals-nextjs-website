/** @type {import('next').NextConfig} */
const repoName = "mothers-meals-nextjs-website"; // 🔥 change to your repo name

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
