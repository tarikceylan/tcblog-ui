'use client';
import { useAuth } from '@/contexts/AuthContext';
import { deleteBlogAction } from '@/lib/actions';
import { IBlog } from '@/types';
import Link from 'next/link';
import { useTransition } from 'react';

export const BlogCard = ({ _id, title, body, author, tags }: IBlog) => {
  const { user } = useAuth();
  const [isPending, startTransition] = useTransition();

  const handleDeleteButtonClick = async () => {
    if (confirm('Are you sure?')) {
      startTransition(async () => {
        await deleteBlogAction(_id);
      });
    }
  };

  return (
    <article className='p-2 m-2 border rounded-2xl'>
      <h2 className='text-2xl'>{title}</h2>
      <p>{body}</p>
      <p>{author}</p>
      <div className='flex gap-2'>
        {tags.map((tag, idx) => {
          return (
            <span key={idx} className='p-1 border'>
              {tag}
            </span>
          );
        })}
      </div>
      <div>
        <div className='flex gap-2 py-2'>
          <Link className='p-1 border' href={`/blogs/${_id}`}>
            Read More
          </Link>
          {user?.roles.includes('Admin') && (
            <>
              <Link className='p-1 border' href={`/blogs/${_id}/edit`}>
                Edit
              </Link>
              <button
                className='p-1 border'
                disabled={isPending}
                onClick={handleDeleteButtonClick}
              >
                {isPending ? 'Deleting...' : 'Delete'}
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
};
