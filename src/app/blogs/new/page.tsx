'use client';

import TextEditor from '@/components/TextEditor';
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
        <TextEditor />
        <input
          name='tags'
          placeholder='Tags (Example: front-end, javascript, HTML)'
          className='p-2 border'
          required
        ></input>
        <div>
          <input type='checkbox' name='is_draft'></input>
          <label htmlFor='is_draft' className='px-2'>
            Post as Draft?
          </label>
        </div>
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
