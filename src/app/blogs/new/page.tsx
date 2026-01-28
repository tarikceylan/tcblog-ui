'use client';

import TextEditor from '@/components/TextEditor';
import { createBlogAction } from '@/lib/actions/';
import Link from 'next/link';
import { useActionState } from 'react';

const CreateBlogPage = () => {
  const [state, formAction, isPending] = useActionState(createBlogAction, null);
  return (
    <main className='flex flex-col items-center gap-2 m-10'>
      <section className='flex w-2/3'>
        <Link href={`/`}>&lt; Back </Link>
      </section>
      <h1 className='text-4xl'>Create New Blog</h1>
      <section className='w-2/3'>
        <form action={formAction} className='flex flex-col gap-2'>
          {state?.error && (
            <p className='text-sm text-red-500'>{state.error}</p>
          )}

          <input
            name='title'
            placeholder='Title'
            className='w-full p-2 border'
            required
          ></input>
          <TextEditor currentValue='' />
          <input
            name='tags'
            placeholder='Tags (Example: front-end, javascript, HTML)'
            className='w-full p-2 border'
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
            className='w-full p-2 border hover:text-white hover:bg-stone-800 disabled:bg-gray-400'
          >
            {isPending ? 'Posting...' : 'Post'}
          </button>
        </form>
      </section>
    </main>
  );
};

export default CreateBlogPage;
