'use server';

import { IActionState, IUser } from '@/types';
import { loginUser } from '../services/user.service';
import { redirect } from 'next/navigation';
import { extractTokenFromResponse } from '../auth.server';
import { cookies } from 'next/headers';

export const loginUserAction = async (
  prevState: IActionState,
  formData: FormData
) => {
  const rawData = {
    email: formData.get('email'),
    password: formData.get('password'),
  } as IUser;

  try {
    const response = await loginUser(rawData);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { error: errorData.message || 'Invalid email or password.' };
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
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong. Please try again later.' };
  }

  redirect('/');
};

export const logoutUserAction = async () => {
  const cookieStore = await cookies();

  cookieStore.delete('access-token');

  redirect('/');
};
