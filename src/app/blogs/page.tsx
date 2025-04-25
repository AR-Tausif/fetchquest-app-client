"use client";
import {
  BlogInnerCard,
  BlogNewsCard,
  NewsBlogCard,
  PaginationCard,
} from "@/components/cards";
import { Container } from "@/components/container";
import { BlogHeroSection } from "./_sections/hero-section";
import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { NewsSearchInput, NewsSelectInput } from "@/components/forms";
import { useGetAllBlogs } from "@/hooks/rtk-queries/useGetAllBlogs";
import { useState } from "react";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { blogs } = useGetAllBlogs({ searchTerm });

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className="relative">
      <BlogHeroSection />
      <Container>
        <section className="py-10 space-y-6 relative">
          <div className="flex justify-between items-center">
            <SectionHeading title="News Archive" className="" />
            <NewsSearchInput handleOnblur={handleSearch} />
          </div>
          {/* second edition */}
          <div className="flex justify-between gap-x-6 items-center">
            <div className="flex items-center gap-4">
              <div className="bg-[#D188FF] p-1 px-2">
                <p className="text-white">Latest</p>
              </div>
              <p>
                Magic: The Gathering MTG Arena Dangeons and Dragons Dark
                Alliance Wizards of the coast
              </p>
            </div>
            <div className="">{/* <NewsSelectInput /> */}</div>
          </div>

          {/* all blog posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {blogs?.map((blog) => (
              <BlogNewsCard key={blog._id} blog={blog} />
            ))}
            {/* <BlogNewsCard />

            <BlogNewsCard />

            <BlogNewsCard /> */}
          </div>
          {/* pagination */}
          {/* <PaginationCard /> */}
        </section>
      </Container>
    </div>
  );
};
export default BlogPage;
