import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='flex items-center justify-center gap-2 m-2'>
      <Image src='/icon.svg' width={64} height={64} alt='blog-logo' />
      <h1 className='text-6xl'>Blog</h1>
    </section>
  );
};
