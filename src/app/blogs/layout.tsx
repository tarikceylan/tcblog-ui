import { Navbar } from '@/components';

const BlogNavigationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default BlogNavigationLayout;
