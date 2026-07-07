import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='hidden md:flex md:items-center md:justify-center md:gap-2 md:m-2'>
      <Image src='/icon.svg' width={64} height={64} alt='blog-logo' />
      <h1 className='text-6xl'>Blog</h1>
    </section>
  );
};
