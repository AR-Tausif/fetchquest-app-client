'use client';
import { ChevronDown, CircleUserRound, Headset } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Container } from '@/components/container';
import { NavDropdown } from '@/components/dropdown';

const Logo = '/images/website-logo.svg';

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onMouseLeave = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <nav className='bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 border'>
      <Container>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-3xl p-6'>
          <div className='flex items-center gap-x-3'>
            <Link
              href='/'
              className='flex items-center space-x-3 rtl:space-x-reverse'
            >
              <Image src={Logo} alt='Flowbite Logo' width={50} height={50} />
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'></span>
            </Link>
            <ul className='flex gap-6 uppercase font-bold'>
              <li
                className='flex items-center gap-x-2'
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <p>Games</p> <ChevronDown className='primary-icon' />
              </li>
              <li className='flex items-center gap-x-2'>
                <p>Join Us</p> <ChevronDown className='primary-icon' />
              </li>
              <li>
                <Link href='/who-we-are'>
                  <p>Who we are</p>
                </Link>
              </li>
              <li>
                <p>News</p>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle='mega-menu-full'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mega-menu-full'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>

          <ul className='flex gap-6 font-bold uppercase'>
            <li className='flex gap-x-2'>
              <Headset className='primary-icon' />
              <p>Customer Support</p>
            </li>
            <li className='flex gap-x-2'>
              <CircleUserRound className='primary-icon' />
              <p>My Account</p>
            </li>
          </ul>
        </div>
      </Container>
      <NavDropdown dropdownOpen={dropdownOpen} onMouseLeave={onMouseLeave} />
    </nav>
  );
};
