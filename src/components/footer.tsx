import Image from 'next/image';

// Constants for social media icons
const SOCIAL_ICONS = [
  {
    src: '/images/social-logo/vector.svg',
    alt: 'Vector Image',
  },
  {
    src: '/images/social-logo/discord.svg',
    alt: 'Discord',
  },
  {
    src: '/images/social-logo/instagram.svg',
    alt: 'Instagram',
  },
] as const;

// Image dimensions constants
const SOCIAL_ICON_SIZE = {
  width: 100,
  height: 100,
} as const;

// const LOGO_SIZE = {
//   width: 224,
//   height: 234,
// } as const;

export const Footer = () => {
  return (
    <footer className='robot-fonts bg-gradient-to-t to-[#53083A] from-[#2D0844] text-white'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex md:text-left text-center'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='text-white tracking-widest text-sm mb-3'>
              CATEGORIES
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <a className='text-white hover:text-gray-50'>First Link</a>
              </li>
              <li>
                <a className='text-white hover:text-gray-50'>Second Link</a>
              </li>
              <li>
                <a className='text-white hover:text-gray-50'>Third Link</a>
              </li>
              <li>
                <a className='text-white hover:text-gray-50'>Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
              CATEGORIES
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <a className='text-white hover:text-gray-50'>First Link</a>
              </li>
              <li>
                <a className='text-white hover:text-gray-50'>Second Link</a>
              </li>
              <li>
                <a className='text-white hover:text-gray-50'>Third Link</a>
              </li>
              <li>
                <a className='text-white hover:text-gray-50'>Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
              CATEGORIES
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <a className='text-white hover:text-gray-50'>First Link</a>
              </li>
              <li>
                <a className='text-white hover:text-gray-50'>Second Link</a>
              </li>
              <li>
                <a className='text-white hover:text-gray-50'>Third Link</a>
              </li>
              <li>
                <a className='text-white hover:text-gray-50'>Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <Image
              src='/images/large-logo-img.png'
              alt=''
              width={100}
              height={100}
            />

            <div className='flex items-center gap-8 mt-10 ml-2'>
              {SOCIAL_ICONS.map((icon) => (
                <Image
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  {...SOCIAL_ICON_SIZE}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <p>
          © 1993-2025 Wizards of the Coast LLC, a subsidiary of Hasbro, Inc.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
