import { IBlog } from "@/types/redux/blogs";
import { GredientPragraphLittleBox } from "../boxes";

export const BlogInnerCard = ({blog}:{blog:IBlog}) => {
  return (
    <div className="flex items-center gap-x-4 rounded-md bg-white border">
      <div className="w-full flex justify-center items-end h-[250px] bg-[url(/images/pages/who-we-are/section-four/tab-img/tab-1.jpg)] bg-no-repeat bg-cover bg-center">
        <p className="uppercase py-4 text-white font-bold px-2 text-center text-sm">
          {
        blog.name}
        </p>
      </div>
      <div className="space-y-4 w-[180%] p-4">
        <div className="">
          <GredientPragraphLittleBox text="Fetch quest games" />
        </div>
        <p className="text-sm">12 Feb 2024</p>
        <p className="font-semibold text-sm">
          {
            blog.description
          }
        </p>
      </div>
    </div>
  );
};
