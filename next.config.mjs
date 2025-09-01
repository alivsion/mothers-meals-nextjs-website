/** @type {import('next').NextConfig} */
const repoName = "mothers-meals-nextjs-website";

const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
//   trailingSlash: true, // 🔑 important for GitHub Pages
};

export default nextConfig;
