import { getBlogById } from '@/lib/services';

export const BlogPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const blog = await getBlogById(id);

  return (
    <main>
      <article>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
      </article>
    </main>
  );
};

export default BlogPage;
