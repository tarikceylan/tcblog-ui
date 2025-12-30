import { getActiveBlogs } from '@/lib/services';
import { BlogCard } from './BlogCard';

export const BlogsList = async () => {
  const blogs = await getActiveBlogs();

  return (
    <main>
      {blogs.map((blog) => {
        return <BlogCard key={blog._id} {...blog} />;
      })}
    </main>
  );
};
