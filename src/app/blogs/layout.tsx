import Link from 'next/link';

export const BlogNavigationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <nav className='w-screen h-10 p-2 bg-gray-200'>
        <Link href={`/`}>&lt; Back to Home</Link>
      </nav>
      {children}
    </>
  );
};

export default BlogNavigationLayout;
