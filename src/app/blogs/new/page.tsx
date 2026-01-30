'use client';

import BlogForm from '@/components/BlogForm';
import { createBlogAction } from '@/lib/actions/';
import Link from 'next/link';

const CreateBlogPage = () => {
  return (
    <main className='flex flex-col items-center gap-2 m-10'>
      <section className='flex w-2/3'>
        <Link href={`/`}>&lt; Back </Link>
      </section>
      <h1 className='text-4xl'>Create New Blog</h1>
      <BlogForm blogAction={createBlogAction} />
    </main>
  );
};

export default CreateBlogPage;
