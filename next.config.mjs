import nextra from 'nextra';

const withNextra = nextra({});

// GitHub Pages를 위한 설정
const isProduction = process.env.NODE_ENV === 'production';
const prefix = isProduction ? 'Yong2e2.github.io' : '';

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? `/${prefix}` : '',
  assetPrefix: isProduction ? `/${prefix}/` : '',
});
