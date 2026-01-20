import { LoginSchemaType } from '@/types';
import { makeRequest } from '../client';

export const loginUser = async (user: LoginSchemaType): Promise<Response> => {
  return await makeRequest(`login`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
};
