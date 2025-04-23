import Image from "next/image";
import { GameItemHorizontalLine } from "../lines";
import Link from "next/link";
import { IProduct } from "@/types/redux/products";

export const GameItemBox = ({ product }: { product: IProduct }) => {
  return (
    <div className="w-[30%]">
      <GameItemHorizontalLine />
      <div className="border ml-2 p-2 text-center overflow-hidden">
        <Image
          className="w-96 h-52 object-cover"
          src={
            product.images.length == 0
              ? "/images/pages/who-we-are/section-three/game-product/game-remote.png"
              : product.images[1]
          }
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
          <h4 className="uppercase text-xl text-white">{product.name}</h4>
          <p className="text-sm mx-auto text-gray-200">{product.details}</p>
        </div>
      </Link>
    </div>
  );
};
