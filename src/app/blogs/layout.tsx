import { Navbar } from '@/components';

export const BlogNavigationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default BlogNavigationLayout;
