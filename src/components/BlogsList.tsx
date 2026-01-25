import { getActiveBlogs } from '@/lib/services';
import { BlogCard } from './BlogCard';
import { Hero } from './Hero';

export const BlogsList = async () => {
  const blogs = await getActiveBlogs();

  return (
    <main className='flex flex-col items-center gap-10 m-10'>
      <Hero />
      <section className='flex flex-col items-center w-2/3 gap-2'>
        {blogs.length ? (
          <>
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
