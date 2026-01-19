'use client';

import { useAuth } from '@/contexts/AuthContext';
import { logoutUserAction } from '@/lib/actions';
import Link from 'next/link';
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
    <nav className='flex justify-between w-full h-10 p-2 gap-2 bg-gray-200'>
      <div>TCBlog</div>
      {user && (
        <>
          <div className='flex w-full justify-between'>
            <div className='flex justify-center items-center'>
              <Link href='/blogs/new'>Create New Blog</Link>
            </div>
            <div className='flex gap-2 justify-center items-center'>
              <span>{user.username}</span>
              <button onClick={handleLogoutButtonClick} disabled={isPending}>
                {isPending ? 'Logging out...' : 'Logout'}
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
