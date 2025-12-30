'use client';

import { IAuthContext } from '@/types';
import { createContext, ReactNode, useContext } from 'react';

export const AuthContext = createContext<IAuthContext | null | undefined>(
  undefined
);

export const AuthProvider = ({
  initialUser,
  children,
}: {
  initialUser: IAuthContext | null;
  children: ReactNode;
}) => {
  const user = initialUser ?? { user: null };
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined || context === null) {
    throw new Error(`No context`);
  }
  return context;
};
