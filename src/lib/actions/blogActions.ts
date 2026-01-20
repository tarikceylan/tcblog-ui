'use server';

import { redirect } from 'next/navigation';
import { createBlog, deleteBlog, updateBlog } from '@/lib/services';
import { BlogSchemaType, IActionState, IBlog } from '@/types';
import { revalidatePath } from 'next/cache';
import { BlogSchema } from '../validations/blog';

export const createBlogAction = async (
  prevState: IActionState,
  formData: FormData,
) => {
  const rawData = {
    title: formData.get('title'),
    body: formData.get('body'),
    tags: formData.get('tags')?.toString().trim().split(',') || [],
  } as IBlog;

  const validationResult = BlogSchema.safeParse(rawData);

  if (!validationResult.success) {
    return { error: `Invalid Input${validationResult.error.message}` };
  }

  await createBlog(rawData);

  revalidatePath('/');
  redirect('/');
};

export const updateBlogAction = async (
  prevState: IActionState,
  formData: FormData,
) => {
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
  } as BlogSchemaType;

  const validationResult = BlogSchema.safeParse(rawData);

  if (!validationResult.success) {
    return { error: `Invalid Input${validationResult.error.issues}` };
  }

  try {
    await updateBlog(id, rawData);
  } catch (error) {
    return { error: `Failed to update blog${error}` };
  }

  revalidatePath('/');
  revalidatePath(`/blogs/${id}`);
  redirect('/');
};

export const deleteBlogAction = async (_id: string) => {
  await deleteBlog(_id);
  revalidatePath('/');
};
