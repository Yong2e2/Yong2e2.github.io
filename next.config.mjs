import nextra from 'nextra';

const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/' : '';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  basePath: prefix,
  assetPrefix: prefix,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
};
const withNextra = nextra({
  // ... other Nextra config options
});

export default withNextra(nextConfig);
