'use client';

import { loginUserAction } from '@/lib/actions/userActions';
import { useActionState } from 'react';

const LoginPage = () => {
  const [state, formAction, isPending] = useActionState(loginUserAction, null);

  return (
    <div>
      <form action={formAction} className='flex flex-col gap-2 w-3xs'>
        <input
          className='border p-2'
          name='email'
          placeholder='Email'
          required
        ></input>
        <input
          type='password'
          className='border p-2'
          name='password'
          placeholder='Password'
          required
        ></input>
        {state?.error && <p className='text-red-500 text-sm'>{state.error}</p>}
        <button type='submit' disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
