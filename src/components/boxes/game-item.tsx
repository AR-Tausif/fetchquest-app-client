import Image from "next/image";
import { GameItemHorizontalLine } from "../lines";
import Link from "next/link";

export const GameItemBox = () => {
  return (
    <div className="w-[30%]">
      <GameItemHorizontalLine />
      <div className="border ml-2 p-2 text-center">
        <Image
          className="w-full h-full"
          src="/images/pages/who-we-are/section-three/game-product/game-remote.png"
          alt="Game Item Photo"
          width={1000}
          height={1000}
          />
      </div>
      <GameItemHorizontalLine className="flex-row-reverse" />
      {/* <div className="bg-black px-2 flex items-center justify-around">
        <div className="w-0.5 h-6 bg-white"></div>
        <div className="w-0.5 h-6 bg-white"></div>
        </div> */}
        <Link href="/pricing">
      <div className="text-center py-1">
        <h4 className="uppercase text-xl text-white">Gamepads</h4>
        <p className="text-sm mx-auto text-gray-200">
          22 product Available
        </p>
      </div>
        </Link>
    </div>
  );
};
