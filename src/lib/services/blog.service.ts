import { BlogSchemaType, IBlog } from '@/types';
import { makeRequest } from '@/lib';

export const createBlog = async (blog: BlogSchemaType) => {
  const response = await makeRequest(`blogs`, {
    method: 'POST',
    body: JSON.stringify(blog),
  });

  return response.json();
};

export const getActiveBlogs = async (): Promise<IBlog[]> => {
  const response = await makeRequest(`blogs`, {
    method: 'GET',
  });

  return response.json();
};

export const getBlogById = async (id: string): Promise<IBlog> => {
  const response = await makeRequest(`blogs/${id}`, {
    method: 'GET',
  });

  return response.json();
};

export const updateBlog = async (id: string, blog: BlogSchemaType) => {
  const response = await makeRequest(`blogs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(blog),
  });

  return response.json();
};

export const deleteBlog = async (id: string): Promise<IBlog> => {
  const response = await makeRequest(`blogs/${id}`, {
    method: 'DELETE',
  });

  return response.json();
};
