import { getBlogById } from '@/lib/services';
import { EditBlogForm } from '@/components/EditBlogForm';
import Link from 'next/link';

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
      <section className='w-2/3'>
        <EditBlogForm blog={blog} id={id} />
      </section>
    </main>
  );
};

export default EditBlogPage;
