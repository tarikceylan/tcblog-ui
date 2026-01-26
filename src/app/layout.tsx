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
  title: 'Blog | tarikceylan',
  description: 'TCBlog | Weekly Web Development Articles',
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
      <link rel='icon' href='/icon.svg' />
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
