import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import { ReactNode } from 'react';
import Image from 'next/image';
import './global.css';

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={
      <Image
        src='/assets/images/D-CLO12.png'
        alt='D-CLO'
        width={100}
        height={100}
      />
    }
    // ... Your additional navbar options
  />
);
const footer = <Footer>MIT © Nextra.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <Head />

      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          feedback={{
            content: null,
          }}
          editLink={null}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
