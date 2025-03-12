'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import "./styles/styles.css"

import { AboutUs } from '@/app/_sections/about-us';
import { CommunityBlogSection } from '@/app/_sections/community-blog-section';
import { CraftOurNextGames } from '@/app/_sections/craft-our-next-games';
import { FooterTopSection } from '@/app/_sections/footer-top-section';
import { NewsSection } from '@/app/_sections/news-section';
import { OurFact } from '@/app/_sections/our-fact';
import { OurGameSection } from '@/app/_sections/our-game';
import { UserFeedback } from '@/app/_sections/user-feedback';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      {/* <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
          <p className='mt-2 text-sm text-gray-800'>
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            Import, Seo, Link component, pre-configured with Husky{' '}
          </p>
          <p className='mt-2 text-sm text-gray-700'>
            <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
              See the repository
            </ArrowLink>
          </p>

          <ButtonLink className='mt-6' href='/components' variant='light'>
            See all components
          </ButtonLink>

          <UnstyledLink
            href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
            className='mt-4'
          >
            <img
              width='92'
              height='32'
              src='https://vercel.com/button'
              alt='Deploy with Vercel'
            />
          </UnstyledLink>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
              Theodorus Clarence
            </UnderlineLink>
          </footer>
        </div>
      </section> */}

      <section className="header-hero min-h-screen w-screen flex items-center justify-center">
        <div className=" space-x-32 pt-40">
          <button className="uppercase font-semibold text-white p-3 bg-gradient-to-t to-[#DA5DA3] from-[#5B428A] px-10 roboto-fonts">
            {" "}
            I'm brand new{" "}
          </button>
          <button className="uppercase font-semibold text-white p-3 bg-gradient-to-t to-[#DA5DA3] from-[#5B428A] px-10 roboto-fonts">
            {" "}
            I'm brand new{" "}
          </button>
        </div>
      </section>
      <OurGameSection />
      <NewsSection />
      <CraftOurNextGames />
      <AboutUs />
      <OurFact />
      <UserFeedback />
      <CommunityBlogSection />
      <FooterTopSection />
    </main>
  );
}
