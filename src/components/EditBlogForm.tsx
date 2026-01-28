'use client';

import { useActionState } from 'react';
import { updateBlogAction } from '@/lib/actions';
import { IBlog } from '@/types';
import TextEditor from './TextEditor';

export const EditBlogForm = ({ blog, id }: { blog: IBlog; id: string }) => {
  const [state, formAction, isPending] = useActionState(updateBlogAction, null);

  return (
    <form action={formAction} className='flex flex-col gap-2'>
      <input type='hidden' name='_id' value={id} />

      {state?.error && <p className='text-sm text-red-500'>{state.error}</p>}

      <input
        name='title'
        placeholder='Title'
        className='w-full p-2 border'
        defaultValue={blog.title}
        required
      />
      <TextEditor currentValue={blog.body} />
      <input
        name='tags'
        placeholder='tags'
        className='w-full p-2 border'
        defaultValue={blog.tags.join(', ')}
        required
      />
      <div>
        <input type='checkbox' name='is_draft'></input>
        <label htmlFor='is_draft' className='px-2'>
          Update to Draft?
        </label>
      </div>
      <button
        type='submit'
        disabled={isPending}
        className='w-full p-2 border hover:text-white hover:bg-stone-800 disabled:bg-gray-400'
      >
        {isPending ? 'Updating...' : 'Update'}
      </button>
    </form>
  );
};
