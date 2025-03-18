import { ArrowUpRight } from "lucide-react";
export const GameCard = () => {
  return (
    // TODO: please add your dynamic image based on the key(image will change key like : /images/posters/poster-${key}.jpg) 
    <div className="w-full h-[540px] bg-black bg-no-repeat bg rounded-lg bg-cover bg-center flex items-end -tracking-wider bg-[url(/images/posters/poster-1.jpg)]">
      <div className="text-white w-full">
        <div className="px-8">
          <p>12 Feb 2024</p>
          <p className="uppercase font-bold text-2xl pt-2 pb-6">
            Introductiong check6 extraction dlc
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
