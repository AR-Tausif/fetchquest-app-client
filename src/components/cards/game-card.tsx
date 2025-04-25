import { IGameCardContent } from "@/types/home-page";
import { ArrowUpRight } from "lucide-react";

interface IGameCardProps {
  content: IGameCardContent;
}
export const GameCard = ({ content }: IGameCardProps) => {
  const { date, gameName, posterImg, site } = content;
  return (
    // TODO: please add your dynamic image based on the key(image will change key like : /images/posters/poster-${key}.jpg)
    <div
    className={`w-full h-[540px] group bg-black bg-no-repeat bg rounded-lg bg-cover bg-center flex items-end -tracking-wider`}
    style={{ backgroundImage: `url(${posterImg})` }}
  >
    <div className="text-white w-full opacity-0 group-hover:opacity-100 transition-opacity">
    <div className="px-8 pt-4 bg-black/50 backdrop-blur-sm transition-all transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-out">
        <p className="transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all delay-100 duration-300">{date}</p>
        <p className="w-1/2 sm:w-3/4 uppercase font-bold text-[3vw] pt-2 pb-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all delay-200 duration-300">
          {gameName}
        </p>
    </div>
      <div className="p-4 w-full flex justify-end px-11 gap-x-2 bg-[#00000099] backdrop-blur-xl rounded-b-lg">
        <a href="https://github.com/AR-Tausif" target="_blank">
        <p>Visit Site </p></a>
        <ArrowUpRight />
      </div>
    </div>
  </div>
  );
};
