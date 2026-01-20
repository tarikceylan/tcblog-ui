'use client';

import { useActionState } from 'react';
import { updateBlogAction } from '@/lib/actions';
import { IBlog } from '@/types';

export const EditBlogForm = ({ blog, id }: { blog: IBlog; id: string }) => {
  const [state, formAction, isPending] = useActionState(updateBlogAction, null);

  return (
    <form action={formAction} className='flex flex-col gap-2 w-3/4'>
      <input type='hidden' name='_id' value={id} />

      {state?.error && <p className='text-red-500 text-sm'>{state.error}</p>}

      <input
        name='title'
        placeholder='Title'
        className='p-2 border'
        defaultValue={blog.title}
        required
      />
      <textarea
        name='body'
        placeholder='Share your thoughts...'
        className='p-2 border'
        defaultValue={blog.body}
        required
      />
      <input
        name='tags'
        placeholder='tags'
        className='p-2 border'
        defaultValue={blog.tags.join(', ')}
        required
      />
      <button
        type='submit'
        disabled={isPending}
        className='p-2 border hover:text-white hover:bg-stone-800 disabled:bg-gray-400'
      >
        {isPending ? 'Updating...' : 'Update'}
      </button>
    </form>
  );
};
