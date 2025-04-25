import { IMappedGameSlide } from "@/hooks/rtk-queries/useGetAllGames";
import { getLocalDate } from "@/utils/localDate";
import { ArrowUpRight } from "lucide-react";
export const DropdownGameCard = ({
  gameContent,
}: {
  gameContent: IMappedGameSlide;
}) => {
  return (
    <div
      className="w-full min-h-[300px] bg-black bg-no-repeat rounded-lg bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${gameContent?.posterImg})`,
      }}
    >
      <div className="text-white w-full">
        <div className="px-8">
          <p>{getLocalDate(gameContent.date)}</p>
          <p className="uppercase font-bold text-2xl pt-2 pb-6">
            {gameContent?.gameName}
          </p>
        </div>
        <div className="p-4 w-full flex justify-end px-11 gap-x-2 bg-[#00000099] backdrop-blur-xl rounded-b-lg">
          <a href={gameContent?.site} target="_blank" rel="noopener noreferrer">
            <p>Visit Site </p>
          </a>
          <ArrowUpRight />
        </div>
      </div>
    </div>
  );
};
