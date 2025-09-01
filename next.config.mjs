// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/mothers-meals-nextjs-website' : '',
  assetPrefix: isProd ? '/mothers-meals-nextjs-website/' : '',
};

 export default  nextConfig;
