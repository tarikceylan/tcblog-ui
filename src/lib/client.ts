'use server';

import { getAuthToken } from './auth.server';

export const makeRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const token = await getAuthToken();
  const headers = new Headers(options.headers);

  headers.set('Content-Type', 'application/json');

  if (token) {
    headers.set('Cookie', `access-token=${token}`);
  }

  if (!API_BASE_URL) {
    throw new Error(`Invalid API URL`);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      credentials: 'include',
      ...options,
      headers: headers,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
