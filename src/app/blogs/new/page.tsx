import { createBlogAction } from '@/lib/actions/';

export const CreateBlogPage = () => {
  return (
    <main className='flex flex-col items-center justify-center gap-2'>
      <h1>Create New Blog</h1>
      <form action={createBlogAction} className='flex flex-col gap-2 w-3/4'>
        <input
          name='title'
          placeholder='Title'
          className='p-2 border'
          required
        ></input>
        <textarea
          name='body'
          placeholder='Share your thoughts...'
          className='p-2 border'
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
          className='p-2 border hover:text-white hover:bg-stone-800 ease-in duration-250'
        >
          Post
        </button>
      </form>
    </main>
  );
};

export default CreateBlogPage;
