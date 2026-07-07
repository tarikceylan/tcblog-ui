import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { getSessionInfo } from '@/lib/auth.server';
import { Ubuntu } from 'next/font/google';

const roboto = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'TCBlog',
  description: 'tarikceylan | Personal Blog ',
  icons: {
    icon: '/icon.svg',
  },
  metadataBase: new URL('https://blog.tarikceylan.com'),
  openGraph: {
    title: 'TCBlog',
    description: 'tarikceylan | Personal Blog',
    images: [
      {
        url: '/og_thumbnail.png',
        width: 400,
        height: 400,
        alt: 'TCBlog Logo',
      },
    ],
    locale: 'en-us',
    type: 'website',
  },
};

export const dynamic = 'force-dynamic';

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await getSessionInfo();

  return (
    <html lang='en' className={`${roboto.variable}`}>
      <body
        data-color-mode='dark'
        className='font-ubuntu bg-neutral-900 text-neutral-200'
      >
        <AuthProvider initialUser={user}>{children}</AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
