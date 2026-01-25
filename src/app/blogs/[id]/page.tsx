import { getBlogById } from '@/lib/services';
import { formatDate } from '@/lib/utils/utils';
import Link from 'next/link';

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const blog = await getBlogById(id);
  const formattedDate = formatDate(blog.updatedAt);

  return (
    <main className='flex flex-col items-center gap-2 m-10'>
      <section className='flex flex-col w-2/3'>
        <Link href={`/`}>&lt; Blogs </Link>
      </section>
      <section className='flex flex-col w-2/3'>
        <article>
          <h2 className='text-6xl'>{blog.title}</h2>
          <p className='mt-2 mb-5 text-neutral-500'>{`Published by ${blog.author} on ${formattedDate}`}</p>
          <p>{blog.body}</p>
        </article>
      </section>
    </main>
  );
};

export default BlogPage;
