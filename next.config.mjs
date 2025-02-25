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
  output: 'export', // 정적 내보내기 설정
  images: {
    unoptimized: true, // GitHub Pages에서는 이미지 최적화를 비활성화
  },
  basePath: isProduction ? `/${repository}` : '', // GitHub Pages를 위한 base path 설정
  assetPrefix: isProduction ? `/${repository}/` : '', // 에셋 접두사 설정
});
