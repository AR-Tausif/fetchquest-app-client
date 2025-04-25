"use client";
import { SingleBlogDetailsSkeleton } from "@/components/skeleton/single-blog-details-skeleton";
import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import { useGetSingleBlogQuery } from "@/redux/api/blogs";
import { getLocalDate } from "@/utils/localDate";
import { AtSign, CalendarDays, Tag } from "lucide-react";
import React from "react";

export default function SingleBlogDetails({ blogId }: { blogId: string }) {
  const { data, isLoading } = useGetSingleBlogQuery({ blog: blogId });
  console.log(data?.data?.name);
  //   if (!isLoading) return <SingleBlogDetailsSkeleton />;
  return (
    <>
      {isLoading ? (
        <SingleBlogDetailsSkeleton />
      ) : (
        <div className="space-y-6 px-4">
          <div className="p-0 md:px-8 w-full">
            <VideoEmbed placeholderImage={data?.data.image} />
          </div>

          <div className="space-y-10 flex flex-col justify-center items-center pb-10">
            <SectionHeading
              title={data?.data?.name!}
              className="w-full md:w-1/2 mx-auto text-center text-[2.5rem] leading-10 md:leading-normal"
            />

            <div className="flex flex-wrap gap-x-20 gap-y-4">
              <div className="flex gap-x-2">
                <CalendarDays className="text-gray-400" />
                <p>{data?.data.createdAt ? getLocalDate(data?.data.createdAt) : "N/A" }</p>
              </div>
              <div className="flex gap-x-2">
                <AtSign className="text-gray-400" />
                <h4 className="uppercase text-[#DA5DA3] font-semibold">
                  Fetch quest games
                </h4>
              </div>
              <div className="flex gap-x-2">
                <Tag className="text-gray-400" />
                <h4 className="uppercase text-[#DA5DA3] font-semibold">
                  Company
                </h4>
              </div>
            </div>

            <div className="">
              <p>{data?.data.description}</p>
            </div>

            {/* linking section of the blog */}
            {/* <div className="w-full">
                    <p>Follow Us:</p>
                    <a href="">
                      <p className="text-[#DA5DA3] underline underline-offset-4">
                        www.abc.com
                      </p>
                    </a>
                  </div> */}

            {/* another linking section of the blog */}
            {/* <div className="w-full">
                    <div className="flex gap-x-2">
                      <p>Brodcast:</p>
                      <a href="#">
                        <p className="text-[#DA5DA3]">www.fetchquest.com</p>
                      </a>
                    </div>
                    <div className="flex gap-x-2">
                      <p>Instagram:</p>
                      <a href="#">
                        <p className="text-[#DA5DA3]">www.fetchquest.com</p>
                      </a>
                    </div>
                  </div> */}

            {/* <div className="w-20 h-1 bg-gray-800" /> */}

            {/* <div className="w-full">
                    <p>Media Relations </p>
                    <p>Josiane Betit </p>
                    <p>514 831-0276 </p>
                    <p>adc@videotron.ca </p>
                  </div> */}
          </div>
        </div>
      )}
    </>
  );
}
