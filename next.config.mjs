import nextra from 'nextra';

const isProduction = process.env.NODE_ENV === 'production';
const repository = 'yong2e2.github.io'; // 여기에 실제 레포지토리 이름을 넣으세요

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? `` : '',
  assetPrefix: isProduction ? `` : '',
};
const withNextra = nextra({});

export default withNextra(nextConfig);
