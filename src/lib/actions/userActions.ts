'use server';

import { IUser } from '@/types';
import { loginUser } from '../services/user.service';
import { redirect } from 'next/navigation';
import { extractTokenFromResponse } from '../auth.server';
import { cookies } from 'next/headers';

export const loginUserAction = async (formData: FormData) => {
  const rawData = {
    email: formData.get('email'),
    password: formData.get('password'),
  } as IUser;

  const response = await loginUser(rawData);

  if (!response.ok) {
    throw new Error(`Invalid credentials`);
  }

  const token = await extractTokenFromResponse(response);

  if (token) {
    const cookieStore = await cookies();

    cookieStore.set('access-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });
  }

  redirect('/');
};

export const logoutUserAction = async () => {
  const cookieStore = await cookies();

  cookieStore.delete('access-token');

  redirect('/');
};
