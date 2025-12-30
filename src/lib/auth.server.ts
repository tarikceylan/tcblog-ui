'use server';

import { cookies } from 'next/headers';
import { makeRequest } from './client';

export const extractTokenFromResponse = async (response: Response) => {
  const setCookieHeader = response.headers.get('Set-Cookie');

  if (!setCookieHeader) {
    return `Something went wrong`;
  }

  const token = setCookieHeader.split('=')[1].split(';')[0];

  return token;
};

export const getSessionInfo = async () => {
  try {
    const response = await makeRequest('auth/me');

    return await response.json();
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
};

export const getAuthToken = async () => {
  const cookieStore = await cookies();

  return cookieStore.get('access-token')?.value;
};
