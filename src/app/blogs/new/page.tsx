'use client';

import { createBlogAction } from '@/lib/actions/';
import { useActionState } from 'react';

const CreateBlogPage = () => {
  const [state, formAction, isPending] = useActionState(createBlogAction, null);
  return (
    <main className='flex flex-col items-center justify-center gap-2'>
      <h1>Create New Blog</h1>
      <form action={formAction} className='flex flex-col w-3/4 gap-2'>
        {state?.error && <p className='text-sm text-red-500'>{state.error}</p>}

        <input
          name='title'
          placeholder='Title'
          className='p-2 border'
          required
        ></input>
        <textarea
          name='body'
          placeholder='Share your thoughts...'
          className='p-2 border min-h-50'
          required
        ></textarea>
        <input
          name='tags'
          placeholder='tags'
          className='p-2 border'
          required
        ></input>
        <button
          type='submit'
          disabled={isPending}
          className='p-2 border hover:text-white hover:bg-stone-800 disabled:bg-gray-400'
        >
          {isPending ? 'Posting...' : 'Post'}
        </button>
      </form>
    </main>
  );
};

export default CreateBlogPage;
