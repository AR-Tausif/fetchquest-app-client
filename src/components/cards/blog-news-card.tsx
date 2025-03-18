import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../top-headings/SectionHeading";
import { GredientPragraphLittleBox } from "../boxes";
import Link from "next/link";

export const BlogNewsCard = () => {
  return (
    <div className="border relative w-full p-6 space-y-6 rounded-sm transition-transform transition-shadow duration-300 hover:bg-pink-50/50 hover:shadow-md">
      <img
        src="/images/pages/blogs/single-blog.jpg"
        alt=""
        className="rounded-sm w-full h-[250px] object-cover"
      />
      <GredientPragraphLittleBox
        text="Fetch Quest Games"
        className="absolute -top-2 left-5 text-xs"
      />
      <div className="">
        <p>October 21, 2025</p>
        <SectionHeading
          title="FC25 Prepares for October 2024 Release with Enhanced Realism"
          className="leading-none"
        />
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          voluptates! Quam facere ex numquam, distinctio rem earum quo
          aspernatur nemo sunt culpa animi voluptatibus minima.
        </p>
      </div>
      <div className="flex justify-end">
      <Link href="/blogs/1">
        <button className="bg-[#D188FF] hover:bg-[#D188EE]/50 text-white ps-4 pe-2 py-2 rounded-md flex gap-x-2">
          Read More <ArrowRight />
        </button>
      </Link>
      </div>
    </div>
  );
};
