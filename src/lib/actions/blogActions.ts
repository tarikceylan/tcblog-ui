'use server';

import { redirect } from 'next/navigation';
import { createBlog, deleteBlog, updateBlog } from '@/lib/services';
import { IBlog } from '@/types';
import { revalidatePath } from 'next/cache';

export const createBlogAction = async (formData: FormData) => {
  const rawData = {
    title: formData.get('title'),
    body: formData.get('body'),
    tags: formData.get('tags')?.toString().trim().split(',') || [],
  } as IBlog;

  await createBlog(rawData);

  revalidatePath('/');
  redirect('/');
};

export const updateBlogAction = async (formData: FormData) => {
  const id = formData.get('_id') as string;

  const rawData = {
    title: formData.get('title'),
    body: formData.get('body'),
    tags:
      formData
        .get('tags')
        ?.toString()
        .split(',')
        .map((tag) => tag.trim()) || [],
  } as IBlog;

  await updateBlog(id, rawData);

  revalidatePath('/');
  revalidatePath(`/blogs/${id}`);
  redirect('/');
};

export const deleteBlogAction = async (_id: string) => {
  await deleteBlog(_id);
  revalidatePath('/');
};
