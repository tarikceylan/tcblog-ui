import { IUser } from '@/types';
import { makeRequest } from '../client';

export const loginUser = async (
  user: Pick<IUser, 'email' | 'password'>
): Promise<Response> => {
  return await makeRequest(`login`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
};
