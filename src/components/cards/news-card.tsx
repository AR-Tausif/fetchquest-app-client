import { IGameCardContent } from "@/types/home-page";
import { ArrowRight, CalendarDays, Link } from "lucide-react";
import Image from "next/image";
interface INewsCardProps {
  content: IGameCardContent;
}
export const NewsCard = ({ content }: INewsCardProps) => {
  const { date, gameName, posterImg, site } = content;
  return (
    <div className="border w-full border-[#7D3C98] space-y-2 p-4  rounded-lg">
      <Image
        src={posterImg? posterImg : '/images/posters/poster-15.png'}
        alt="card photo"
        className="h-[100vw] md:h-[25vw] w-full rounded-lg object-cover"
        width={1000}
        height={1000}
      />
      <p className="uppercase font-semibold text-xl">FC25</p>
      <div className="flex justify-between">
        <div className="flex">
          <CalendarDays />
          <p>27/10/2024</p>
        </div>
        <a href="#">
          <div className="border p-2 rounded-full hover:bg-primary hover:text-white transition-all ease-linear duration-300">
            <ArrowRight />
          </div>
        </a>
      </div>
    </div>
  );
};
