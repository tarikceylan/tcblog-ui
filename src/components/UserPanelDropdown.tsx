import { logoutUserAction } from '@/lib/actions';
import { useTransition } from 'react';

const UserPanelDropdown = () => {
  const [isPending, startTransition] = useTransition();

  const handleLogoutButtonClick = () => {
    startTransition(async () => {
      await logoutUserAction();
    });
  };
  return (
    <div className='flex justify-center bg-neutral-800/20 w-37.5 border border-neutral-500 top-14 absolute p-5'>
      <ol>
        <li>
          <button
            className='cursor-pointer'
            onClick={handleLogoutButtonClick}
            disabled={isPending}
          >
            {isPending ? 'Logging out...' : 'Logout'}
          </button>
        </li>
      </ol>
    </div>
  );
};

export default UserPanelDropdown;
