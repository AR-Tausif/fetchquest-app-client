'use client';

import Head from 'next/head';
import * as React from 'react';
import "./page.css"
import { OurGameSection } from '@/app/_sections/our-game';
import { NewsSection } from '@/app/_sections/news-section';
import { CraftOurNextGames } from '@/app/_sections/craft-our-next-games';
import { AboutUs } from '@/app/_sections/about-us';
import { OurFact } from '@/app/_sections/our-fact';
import { UserFeedback } from '@/app/_sections/user-feedback';
import { CommunityBlogSection } from '@/app/_sections/community-blog-section';
import { FooterTopSection } from '@/app/_sections/footer-top-section';



// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi sampodnatskjdflksdjflkjsdfkl;jsdkl;fjsdkl;fjsdkla;fj</title>
      </Head>
      <section className="header-hero w-screen min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-32 pt-20 md:pt-40 px-4 md:px-0">
          <button className="w-full md:w-auto uppercase font-semibold text-white p-3 bg-gradient-to-t to-[#DA5DA3] from-[#5B428A] px-6 md:px-10 roboto-fonts transition-all hover:opacity-90">
            {"I'm"} brand new
          </button>
          <button className="w-full md:w-auto uppercase font-semibold text-white p-3 bg-gradient-to-t to-[#DA5DA3] from-[#5B428A] px-6 md:px-10 roboto-fonts transition-all hover:opacity-90">
            {"I'm"} brand new
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
