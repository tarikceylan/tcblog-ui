'use client';
import { useAuth } from '@/contexts/AuthContext';
import { deleteBlogAction } from '@/lib/actions';
import { formatDate } from '@/lib/utils/utils';
import { IBlog } from '@/types';
import Link from 'next/link';
import { useTransition } from 'react';

export const BlogCard = ({
  _id,
  title,
  body,
  author,
  tags,
  updatedAt,
}: IBlog) => {
  const { user } = useAuth();
  const [isPending, startTransition] = useTransition();
  const formattedDate = formatDate(updatedAt);

  const handleDeleteButtonClick = async () => {
    if (confirm('Are you sure?')) {
      startTransition(async () => {
        await deleteBlogAction(_id);
      });
    }
  };

  return (
    <article className='border-b-2 p-5 border-neutral-300 hover:bg-[#1d1d1d] rounded-2xl duration-300'>
      <div>
        <Link href={`/blogs/${_id}`}>
          <h2 className='mb-5 text-4xl duration-300 hover:underline'>
            {title}
          </h2>
        </Link>
      </div>
      <div className='flex gap-2'>
        {tags.map((tag, idx) => {
          return (
            <span key={idx} className='px-2 border w-fit'>
              {tag}
            </span>
          );
        })}
      </div>
      <div>
        <p className='py-2'>{body}</p>
      </div>
      <div>
        <p className='text-neutral-500'>
          {author} · {formattedDate}
        </p>
      </div>
      <div className='flex gap-2 py-2'>
        <Link href={`/blogs/${_id}`}>Read More</Link>
        {user?.roles.includes('Admin') && (
          <>
            <Link href={`/blogs/${_id}/edit`}>Edit</Link>
            <button
              className='cursor-pointer'
              disabled={isPending}
              onClick={handleDeleteButtonClick}
            >
              {isPending ? 'Deleting...' : 'Delete'}
            </button>
          </>
        )}
      </div>
    </article>
  );
};
