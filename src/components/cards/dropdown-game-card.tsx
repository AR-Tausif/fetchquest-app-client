import { IMappedGameSlide } from "@/hooks/rtk-queries/useGetAllGames";
import { IBlog } from "@/types/redux/blogs";
import { ArrowUpRight } from "lucide-react";
export const DropdownGameCard = ({ gameContent }: { gameContent: IMappedGameSlide }) => {
  console.log("gameContent", gameContent);
  return (
    <div
      className={`w-full h-[20vw] bg-black bg-no-repeat bg rounded-lg bg-cover bg-center flex items-end `}
      style={{
        backgroundImage: `url(${gameContent?.posterImg})`,
      }}
    >
      <div className="text-white w-full">
        <div className="px-8">
          <p>12 Feb 2024</p>
          <p className="uppercase font-bold text-2xl pt-2 pb-6">
            {gameContent?.gameName}
          </p>
        </div>
        <div className="p-4 w-full flex justify-end px-11 gap-x-2 bg-[#00000099] backdrop-blur-xl rounded-b-lg">
          <p>Visit Site </p>
          <ArrowUpRight />
        </div>
      </div>
    </div>
  );
};
