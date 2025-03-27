import { IGameCardContent } from "@/types/home-page";

interface IOurNextGameCardProps {
  content: IGameCardContent;
}
export const OurNextGameCard = ({ content }: IOurNextGameCardProps) => {
  const { date, gameName, posterImg } = content;
  return (
    <div
      className="w-full h-[70vh] group flex flex-col justify-end bg-cover bg-no-repeat overflow-hidden rounded-br-3xl"
      style={{ backgroundImage: `url(${posterImg})` }}
    >
      {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity">
      <p className="w-[55%] text-white px-4 bg-gradient-to-t to-[#DA5DA3] from-[#5B428A]">
        Shadows Unleashed
      </p>
      <div className="p-4 w-full px-6 gap-x-2 bg-[#00000000] backdrop-blur-[8px]">
        <p className="text-white text-center">
          Shadows Unleashed: a new name in Triple A video games in Montreal
        </p>
      </div>  
      </div> */}
      <div className="text-white w-full opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="px-8 pt-4 bg-black/50 backdrop-blur-sm transition-all transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-out">
          {/* <p className="transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all delay-100 duration-300">10-25-2025</p> */}
          <p className="w-1/2 sm:w-3/4 uppercase font-bold text-[2vw] pt-2 pb-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all delay-200 duration-300">
            Shadows Unleashed
          </p>
        </div>
        <div className="p-4 w-full  px-11 gap-x-2 bg-[#00000099] backdrop-blur-xl rounded-b-lg">
          <p>
            Shadows Unleashed: a new name in Triple A video games in Montreal
          </p>
        </div>
      </div>
    </div>
  );
};
