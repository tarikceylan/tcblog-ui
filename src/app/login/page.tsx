import { loginUserAction } from '@/lib/actions/userActions';

export const LoginPage = () => {
  return (
    <div>
      <form action={loginUserAction} className='flex flex-col gap-2 w-3xs'>
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
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
