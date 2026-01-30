import { getBlogById } from '@/lib/services';
import Link from 'next/link';
import BlogForm from '@/components/BlogForm';
import { updateBlogAction } from '@/lib/actions';

const EditBlogPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const blog = await getBlogById(id);

  return (
    <main className='flex flex-col items-center gap-2 m-10'>
      <section className='flex w-2/3'>
        <Link href={`/`}>&lt; Back </Link>
      </section>
      <h1 className='text-4xl'>Update Blog</h1>
      <BlogForm blogAction={updateBlogAction} blog={blog} />
    </main>
  );
};

export default EditBlogPage;
