import { ArrowLeft, ArrowRight, ChevronDown, MoveRight } from "lucide-react";
import { GetStartingBox } from "@/components/boxes";
import { BlogCard } from "@/components/cards";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import Link from "next/link";

export const CommunityBlogSection = () => {
  const blogVideoImg = [
    "https://s3-alpha-sig.figma.com/img/f388/2c9d/1d84f3818c83088fae3e9923c977707a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VMrer9VmvdQ3KUcFx7fLkngSHBk5O~nfR8AlOZfSgBIsffjzRvoor8Zr4NqskY0kM2tKrsUBgmH1xq1GOAhRQKvncwGBwCwmIJCgZ9lXgpZZfViCYKgiOOEdQRTnDhl8sfiy7oawYvfWqtEtc~XlHXJQKFJBH1ivJ4kRUwBcxBHnUbCKOKhyZrFX8UoEQY03qX1jD3xfn9WinVLr-4BOl4qLiwQpztQJiYX20vVAZqS6Ge2bPj~BNpMc90l0RSgt01GO5F8w6N2HBwhOVlUotWMOac3Ui5YXoIzr9YpqClT9sj-9hxjv27P8yl~jTxSHW2RDakfg4uHAYjlj~PgNrA__",
    "https://s3-alpha-sig.figma.com/img/e573/d2bb/0bf3f109b77d638e927263b1422cec58?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pqocdLO3B6j9I6ONNHjURxgShKOfO-5MGVbm-4EZuDjKeki-zA30nODFp3yelo3hNq0IcMlcAsbyOR3HbE1Xq27Zj7XPdiIpDBlKtuxxl9AdUE0uy~6dM2yomioqK-KtarbEK4F9RUI6G8xWKltdPQ8EJDyR0k5Tg6graEceThPGxDavlUokcsQZSkes0h7mg1dqA57RvWUZorNTsC0zc1cluR4E2uEdCRc8ijUqNl7760KLJ946OLLuAbJhwIY4JkhQd6Zw0B0wiYZN5JaVrbU4F3~vUP7KTVgfWE~yII~cTmVXJA7quTkiQA-8x0eeH15q8PI8W9h2IychSwX8wQ__",
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
