'use client';

import { useAuth } from '@/contexts/AuthContext';
import { logoutUserAction } from '@/lib/actions';
import Link from 'next/link';
import Image from 'next/image';
import { useTransition } from 'react';

export const Navbar = () => {
  const { user } = useAuth();
  const [isPending, startTransition] = useTransition();

  const handleLogoutButtonClick = () => {
    startTransition(async () => {
      await logoutUserAction();
    });
  };

  return (
    <nav className='flex justify-between w-full gap-2 p-2 shadow-sm h-14 shadow-neutral-700'>
      <Link href={'/'} className='flex items-center gap-2 p-2'>
        <Image src='/icon.svg' width={32} height={32} alt='blog-logo' />
        Blog
      </Link>

      {user && (
        <>
          <div className='flex justify-between w-full'>
            <div className='flex items-center justify-center'>
              <Link href='/blogs/new'>Create New Blog</Link>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <span>{user.username}</span>
              <button
                className='cursor-pointer'
                onClick={handleLogoutButtonClick}
                disabled={isPending}
              >
                {isPending ? 'Logging out...' : 'Logout'}
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
