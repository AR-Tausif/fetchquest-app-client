import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../top-headings/SectionHeading";
import { GredientPragraphLittleBox } from "../boxes";
import Link from "next/link";
import { IBlog } from "@/types/redux/blogs";
import { getLocalDate } from "@/utils/localDate";
interface BlogNewsCardProps {
  blog: IBlog;
}
export const BlogNewsCard = ({ blog }: BlogNewsCardProps) => {
  return (
    <div className="border relative w-full p-6 space-y-6 rounded-sm transition-all duration-300 hover:bg-pink-50/50 hover:shadow-md">
      <img
        src={blog?.image || "/images/pages/blogs/single-blog.jpg"}
        alt=""
        className="rounded-sm w-full h-[250px] object-cover"
      />
      <GredientPragraphLittleBox
        text="Fetch Quest Games"
        className="absolute -top-2 left-5 text-xs"
      />
      <div className="">
    
        <p>{blog.createdAt? getLocalDate(blog.createdAt): "N/A"}</p>

        <SectionHeading title={blog.name} className="leading-none" />
        <p className="">{blog.description.slice(0, 100)}...</p>
      </div>
      <div className="flex justify-end">
        <Link href={`blogs/${blog._id}`}>
          <button className="bg-[#D188FF] hover:bg-[#D188EE]/50 text-white ps-4 pe-2 py-2 rounded-md flex gap-x-2">
            Read More <ArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};
