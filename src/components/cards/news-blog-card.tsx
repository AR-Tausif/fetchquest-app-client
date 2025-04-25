import { IBlog } from "@/types/redux/blogs";
import { GredientPragraphLittleBox } from "../boxes";
import { SectionHeading } from "../top-headings/SectionHeading";
import { getLocalDate } from "@/utils/localDate";

export const NewsBlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="bg-black flex flex-col justify-between w-[450px] h-[518px] bg-no-repeat bg-cover bg-center"
    style={{
      backgroundImage: `url(${blog?.image})`,
    }}>
      <div className="p-4">
        <GredientPragraphLittleBox text="Fetch quest games" />
      </div>
      <div className="p-4">
        <p className="text-white">{getLocalDate(blog.createdAt)}</p>
        <SectionHeading
          title={blog?.name}
          className="text-[52px] md:!text-[3vw] text-white leading-10 md:leading-[3rem]"
        />
      </div>
    </div>
  );
};
