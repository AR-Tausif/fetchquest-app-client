"use client";
import { BlogInnerCard, NewsBlogCard } from "@/components/cards";
import { Container } from "@/components/container";
import { BlogHeroSectionSkeleton } from "@/components/skeleton/blog-hero-section-skeleton";
import { useGetAllBlogs } from "@/hooks/rtk-queries/useGetAllBlogs";

export const BlogHeroSection = () => {
  const { blogs, isBlogPending } = useGetAllBlogs();

  if (isBlogPending) {
    return <BlogHeroSectionSkeleton/>
  }

  return (
    <section className="w-screen relative before:content-[''] before:absolute before:bg-black before:w-full before:h-[35%] before:-z-10 before:bg-[url(/images/pages/blogs/hero-container-bg.png)] before:bg-no-repeat before:bg-cover before:bg-center md:before:h-[55%]">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center pt-32 gap-6">
          <div className="">
            <NewsBlogCard blog={blogs![0]} />
          </div>
          <div className="space-y-4 w-full md:w-1/2 px-0 md:px-0 sm:px-12">
            <BlogInnerCard blog={blogs![1]} />
            <BlogInnerCard blog={blogs![2]} />
          </div>
        </div>
      </Container>
    </section>
  );
};
