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
    <nav className='flex justify-between w-full h-14 p-2 gap-2 shadow-sm shadow-neutral-700'>
      <div className='flex items-center p-2 gap-2'>
        <Image src='/icon.svg' width={32} height={32} alt='blog-logo' />
        Blog<span>|</span>
      </div>

      {user && (
        <>
          <div className='flex w-full justify-between'>
            <div className='flex justify-center items-center'>
              <Link href='/blogs/new'>Create New Blog</Link>
            </div>
            <div className='flex gap-2 justify-center items-center'>
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
