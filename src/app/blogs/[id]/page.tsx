import { getBlogById } from '@/lib/services';
import { formatDate } from '@/lib/utils/utils';
import Link from 'next/link';
import Markdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const blog = await getBlogById(id);
  const formattedDate = formatDate(blog.updatedAt);

  return (
    <main className='flex flex-col items-center gap-2 my-10 p-2'>
      <section className='flex flex-col w-full md:w-2/3 p-5'>
        <Link href={`/`}>&lt; Blogs </Link>
      </section>
      <section className='flex flex-col w-full md:w-2/3 p-5'>
        <article className='flex flex-col'>
          <h2 className='text-2xl sm:text-4xl font-extrabold mb-10 md:mb-0'>
            {blog.title}
          </h2>
          <p className='hidden md:block mt-2 mb-5 text-neutral-500'>{`Published by ${blog.author} on ${formattedDate}`}</p>
          <div className='w-full overflow-hidden prose prose-invert prose-h1:text-lg md:prose-h1:text-2xl prose-h2:text-sm md:prose-h2:text-lg wrap-break-word max-w-none'>
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSanitize]}
            >
              {blog.body}
            </Markdown>
          </div>
        </article>
      </section>
    </main>
  );
};

export default BlogPage;
