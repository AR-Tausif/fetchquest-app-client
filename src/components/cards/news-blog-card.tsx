import { GredientPragraphLittleBox } from "../boxes";
import { SectionHeading } from "../top-headings/SectionHeading";

export const NewsBlogCard = () => {
  return (
    <div className="bg-black flex flex-col justify-between w-[450px] h-[518px] bg-[url(/images/pages/who-we-are/section-three/container-bg-3.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="p-4">
        <GredientPragraphLittleBox text="Fetch quest games" />
      </div>
      <div className="p-4">
        <p className="text-white">13 March 2025</p>
        <SectionHeading
          title="April 21, 2025 The Next Year of Magic from Fetch Quest Presents"
          className="text-[52px] md:!text-[3vw] text-white leading-10 md:leading-[3rem]"
        />
      </div>
    </div>
  );
};
