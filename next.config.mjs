import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  contentDirBasePath: '/',
});

// GitHub Pages를 위한 설정
const isProduction = process.env.NODE_ENV === 'production';
const repository = 'Yong2e2.github.io'; // 여기에 실제 레포지토리 이름을 넣으세요

export default withNextra({
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? `/${repository}` : '',
  assetPrefix: isProduction ? `/${repository}/` : '',
});
