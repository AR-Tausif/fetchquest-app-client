import Image from "next/image";
import { GameItemHorizontalLine } from "../lines";
import Link from "next/link";

export const GameItemBox = () => {
  return (
    <div className="w-[30%]">
      <Link href="/pricing">
      <GameItemHorizontalLine />
      <div className="border-2 p-2 text-center">
        <Image
          className="w-full h-full"
          src="https://s3-alpha-sig.figma.com/img/16eb/bd21/7567588212c4501940a5e7dccc7cd8f0?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l49mLn94AMgY58NQE0DinT7DbhnJ9EldYosmX6PIig4CRwvobZ013csigm0T34m44oUWUNFxwkqJu~urUbENJxdNmb~Lv3BR-5qRRqEM8EOZWLmJgaaTH7yuGxX6khzXPW-z4is15V~3jf48XXHmHE~FvvwoCccFFjzzTtZOq21fFhrmTYimM3RpOr4t1DPE6FCOGXvaR1ygGtqEXDnihfAjqKiE1pjX66oUpPEs77EkMbee4JTbk6kVNYB5TZ48zyFum5~5U1lnpP519fT-CKmN9IUjDt0s8UUFFPp0uMwcMGyMvJXQIdp0kom2--jll9iReXVBdINH7sRmsJ2uRw__"
          alt="Game Item Photo"
          width={100}
          height={100}
          />
      </div>
      <GameItemHorizontalLine className="flex-row-reverse" />
      {/* <div className="bg-black px-2 flex items-center justify-around">
        <div className="w-0.5 h-6 bg-white"></div>
        <div className="w-0.5 h-6 bg-white"></div>
        </div> */}
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
