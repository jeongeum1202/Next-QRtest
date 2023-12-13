import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

import { AppProvider, StyledRegistry } from '@/lib/providers';
import Script from 'next/script';
import Head from 'next/head';

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" className={pretendard.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          name="viewport"
        ></meta>
      </Head>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      <body>
        <StyledRegistry>
          <AppProvider>{children}</AppProvider>
        </StyledRegistry>
      </body>
    </html>
  );
}
