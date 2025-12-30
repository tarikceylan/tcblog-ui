'use client';

import { useAuth } from '@/contexts/AuthContext';
import { logoutUserAction } from '@/lib/actions';
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
    <nav className='w-full'>
      <div className='flex justify-end'>
        {user && (
          <div className='flex items-center justify-center gap-2'>
            <span>{user.username}</span>
            <button onClick={handleLogoutButtonClick} disabled={isPending}>
              {isPending ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
