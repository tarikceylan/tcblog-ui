'use client';

import { IUser } from '@/types';
import UserPanelDropdown from './UserPanelDropdown';
import { useState } from 'react';

const UserPanel = ({ user }: { user: IUser }) => {
  const [isHidden, setHidden] = useState(true);

  const handleUsernameClick = () => {
    setHidden(!isHidden);
  };

  return (
    <>
      {user && (
        <div className='flex items-center justify-center gap-2'>
          <div onClick={handleUsernameClick} className='hover:cursor-pointer'>
            <span>{`Welcome, ${user.username}`}</span>
          </div>
          {!isHidden && <UserPanelDropdown />}
        </div>
      )}
    </>
  );
};

export default UserPanel;
