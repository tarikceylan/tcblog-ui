'use client';

import { useActionState } from 'react';
import TextEditor from '@/components/TextEditor';
import { IBlogFormProps } from '@/types';

const BlogForm = ({ blogAction, blog }: IBlogFormProps) => {
  const [state, formAction, isPending] = useActionState(blogAction, null);

  return (
    <section className='w-2/3'>
      <form action={formAction} className='flex flex-col gap-2'>
        <input type='hidden' name='_id' defaultValue={blog?._id} />
        {state?.error && <p className='text-sm text-red-500'>{state.error}</p>}
        <input
          name='title'
          defaultValue={blog?.title}
          placeholder='Title'
          className='w-full p-2 border'
          required
        ></input>
        <TextEditor currentValue={blog?.body || ''} />
        <input
          name='tags'
          placeholder='Tags (Example: front-end, javascript, HTML)'
          className='w-full p-2 border'
          defaultValue={blog?.tags.join(', ')}
          required
        ></input>
        <div>
          <input
            type='checkbox'
            name='is_draft'
            defaultChecked={blog?.hidden}
          ></input>
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
  );
};

export default BlogForm;
