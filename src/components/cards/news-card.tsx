import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";

export const NewsCard = () => {
  return (
    <div className="border w-full border-[#7D3C98] space-y-2 p-4  rounded-lg">
      <Image
        src="/images/posters/poster-1.jpg"
        alt="card photo"
        className="h-[18rem] w-full rounded-lg object-cover"
        width={1000}
        height={1000}
      />
      <p className="uppercase font-semibold text-xl">FC25</p>
      <div className="flex justify-between">
        <div className="flex">
          <CalendarDays />
          <p>27/10/2024</p>
        </div>
        <ArrowRight />
      </div>
    </div>
  );
};
