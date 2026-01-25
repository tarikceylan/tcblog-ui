import { getBlogById } from '@/lib/services';
import { EditBlogForm } from '@/components/EditBlogForm';

const EditBlogPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const blog = await getBlogById(id);

  return (
    <main>
      <h1>Update Blog</h1>
      <EditBlogForm blog={blog} id={id} />
    </main>
  );
};

export default EditBlogPage;
