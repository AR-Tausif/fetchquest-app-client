import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../top-headings/SectionHeading";
import { GredientPragraphLittleBox } from "../boxes";

export const BlogNewsCard = () => {
  return (
    <div className="border relative w-full p-2 space-y-6 rounded-sm">
      <img
        src="https://s3-alpha-sig.figma.com/img/6b66/731b/360e0c3606af3f363e3650077dcced85?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WYNsO3UV5ZOP-LwwdXb5BNcH5avOoeHT9CYuFC5cSJ-vP1Jmw8v02FPwkYbgu9hpoOEPu2ArIf6nVArV--rGaopRU0pL6WmAHNxhj6ELYSfu3OHNErn7o-T1NNR6rOlFbxRxfLv4l9lX9Uu-7S3bYMoSDDhXDhP9sMKktLiowpA~vhMo2QYxcCQUVNdtUR0hP42qwAkY8pyPyskFOQAlh5OjOZq-nBlQBn0ysfIwE7pTJ7N08YFYnWt1Dz~qvnl6A4ryyyWkS0selLxeVaGyZI0RKg05dImApP4gNg-6g6~1IQZxNtz0HQbfBmJ84fLvygDy6C5oCiyHkCYviX9pUA__"
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
        <button className="bg-[#D188FF] hover:bg-[#D188EE] text-white ps-4 pe-2 py-2 rounded-md flex gap-x-2">
          Read More <ArrowRight />
        </button>
      </div>
    </div>
  );
};
