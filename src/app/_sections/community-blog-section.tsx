import { ArrowLeft, ArrowRight, ChevronDown, MoveRight } from "lucide-react";
import { GetStartingBox } from "@/components/boxes";
import { BlogCard } from "@/components/cards";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import Link from "next/link";

export const CommunityBlogSection = () => {
  const blogVideoImg = [
    "/images/blog-photos/blog-video-bg-1.png",
    "/images/blog-photos/blog-video-bg-2.png",
  ];

  return (
    <div className="overflow-hidden">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center pb-10">
          <div className="">
            <SectionHeading title="Community & blogs" />
          </div>
          {/* <div className="flex gap-x-4 mt-4 sm:mt-0">
            <button className="border p-1 px-3 border-[#7D3C98]">
              <ArrowLeft />
            </button>
            <button className="border p-1 px-3 border-[#7D3C98]">
              <ArrowRight />
            </button>
          </div> */}

          <Link href="/blogs">
            <div className="flex gap-x-2 transition-all duration-300 px-6 py-1 hover:border-b-2 border-gray-500 pb-2 font-bold shadow">
              <button className="uppercase"> View All </button>
              <MoveRight />
            </div>
          </Link>
        </div>
      </Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0">
        <BlogCard className="col-span-1 sm:col-span-2 lg:col-span-2" />
        <BlogCard className="col-span-1 sm:col-span-1 lg:col-span-2" />
        <BlogCard className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-start-2" />
        <VideoEmbed
          className="col-span-1 sm:col-span-1 lg:col-span-2"
          placeholderImage={blogVideoImg[0]}
        />
        <VideoEmbed
          className="col-span-1 sm:col-span-1 lg:col-span-2"
          placeholderImage={blogVideoImg[1]}
        />
        <GetStartingBox className="col-span-1 sm:col-span-1 lg:col-start-4 lg:row-start-2" />
      </div>
    </div>
  );
};
