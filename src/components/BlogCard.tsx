'use client';
import { useAuth } from '@/contexts/AuthContext';
import { deleteBlogAction } from '@/lib/actions';
import { formatDate, markdownToPlainText } from '@/lib/utils/utils';
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

  const previewBodyText = markdownToPlainText(body);

  return (
    <article className='border-b-2 p-5 border-neutral-300 hover:bg-[#1d1d1d] rounded-2xl duration-300 w-full '>
      <div>
        <Link href={`/blogs/${_id}`}>
          <h2 className='text-xl sm:text2xl md:text-4xl mb-5 font-semibold duration-300 hover:underline'>
            {title}
          </h2>
        </Link>
      </div>
      <div className='sm:flex gap-2 hidden sm:w-fit'>
        {tags.map((tag, idx) => {
          return (
            <span key={idx} className='px-2 border'>
              {tag}
            </span>
          );
        })}
      </div>
      <div className='py-2 overflow-hidden'>
        <p className='leading-normal line-clamp-4 text-sm sm:text-md md:text-lg'>
          {previewBodyText}
        </p>
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
