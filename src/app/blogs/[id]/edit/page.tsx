import { getBlogById } from '@/lib/services';
import { EditBlogForm } from '@/components/EditBlogForm';

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogById(id);

  return (
    <main className='flex flex-col items-center justify-center gap-2'>
      <h1>Update Blog</h1>
      <EditBlogForm blog={blog} id={id} />
    </main>
  );
}
