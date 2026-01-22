import { getActiveBlogs } from '@/lib/services';
import { BlogCard } from './BlogCard';
import Image from 'next/image';

export const BlogsList = async () => {
  const blogs = await getActiveBlogs();

  return (
    <main className='flex flex-col items-center gap-10 m-10'>
      <section className='flex flex-col items-center w-2/3 gap-2'>
        {blogs.length ? (
          <>
            <article className='flex items-center justify-center gap-2 m-2'>
              <Image src='/icon.svg' width={64} height={64} alt='blog-logo' />
              <h1 className='text-6xl'>Blog</h1>
            </article>
            {blogs.map((blog) => {
              return <BlogCard key={blog._id} {...blog} />;
            })}
          </>
        ) : (
          <h1 className='text-4xl'>Nothing here yet...</h1>
        )}
      </section>
    </main>
  );
};
