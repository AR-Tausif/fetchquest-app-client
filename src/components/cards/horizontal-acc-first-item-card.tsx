import { cn } from "@/lib/utils";
import Image from "next/image";

export const HorizontalAccFirstItemCard = ({
  activeIndex,
  index,
}: {
  activeIndex: number|null;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-4 transition-all duration-300 ease-in-out",
        activeIndex === 1-1 ? "flex-row" : "",
        activeIndex === null ? "" : ""
      )}
    >
      {/* change the cdn link to static image */}
      <Image
        src="/images/pages/who-we-are/section-three/game-profile/profile-1.png"
        alt="game photo"
        className="w-[210px] h-[240px] rounded-md object-cover border transition-all duration-300 ease-in-out"
        height={1000}
        width={1000}
      />
      <Image
        src="/images/pages/who-we-are/section-three/game-profile/profile-2.png"
        alt="game photo"
        className="w-[210px] h-[240px] rounded-md object-cover border transition-all duration-300 ease-in-out"
        height={1000}
        width={1000}
      />
      <Image
        src="/images/pages/who-we-are/section-three/game-profile/profile-3.jpg"
        alt="game photo"
        className="w-[210px] h-[240px] rounded-md object-cover border transition-all duration-300 ease-in-out"
        height={1000}
        width={1000}
      />
     
    </div>
  );
};
