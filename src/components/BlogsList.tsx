import { getActiveBlogs } from '@/lib/services';
import { BlogCard } from './BlogCard';

export const BlogsList = async () => {
  const blogs = await getActiveBlogs();

  if (!blogs.length) {
    return (
      <main className='flex items-center justify-center h-screen'>
        <h1>No blogs found!</h1>
      </main>
    );
  }
  return (
    <main>
      {blogs.map((blog) => {
        return <BlogCard key={blog._id} {...blog} />;
      })}
    </main>
  );
};
