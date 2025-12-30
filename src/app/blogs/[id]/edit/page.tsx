import { updateBlogAction } from '@/lib/actions';
import { getBlogById } from '@/lib/services';

export const EditBlogPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const blog = await getBlogById(id);

  return (
    <main>
      <h1>Update Blog</h1>
      <form action={updateBlogAction} className='flex flex-col gap-2'>
        <input type='hidden' name='_id' value={id} />
        <input
          name='title'
          placeholder='Title'
          className='p-2 border'
          defaultValue={blog.title}
          required
        ></input>
        <textarea
          name='body'
          placeholder='Share your thoughts...'
          className='p-2 border'
          defaultValue={blog.body}
          required
        ></textarea>
        <input
          name='tags'
          placeholder='tags'
          className='p-2 border'
          defaultValue={blog.tags.join(', ')}
          required
        ></input>
        <button type='submit' className='p-2 border'>
          Update
        </button>
      </form>
    </main>
  );
};

export default EditBlogPage;
