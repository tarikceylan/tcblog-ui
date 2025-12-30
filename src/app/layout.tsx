import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { getSessionInfo } from '@/lib/auth.server';

export const metadata: Metadata = {
  title: 'TCBlog | tarikceylan',
  description: 'TCBlog | Weekly Web Development Articles',
};

export const dynamic = 'force-dynamic';

export const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await getSessionInfo();

  return (
    <html lang='en'>
      <body>
        <AuthProvider initialUser={user}>{children}</AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
