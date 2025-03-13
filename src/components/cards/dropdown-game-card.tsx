import { ArrowUpRight } from "lucide-react";
export const DropdownGameCard = () => {
  return (
    <div
      className={`w-full h-[20vw] bg-black bg-no-repeat bg rounded-lg bg-cover bg-center flex items-end -tracking-wider bg-[url(https://s3-alpha-sig.figma.com/img/7514/8196/6bf1d880a67c2156039f4fac765c8c78?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eINOCVPjvCARz0WIwu6TeN3UibT3xhrbwuas85RiXYre3sTVvpwFByWeCi31LFxQK8Ef2urmc2BU9Dz-MYOuoYbw8jejEs~jum1PCm~~BW7FQdB1xAWamiWwWDcNOeMwT7CySvSBEDvlv5jLlfJLUqD95BkggE8ztqbZJX-SF-08ChkHhqPe7~BQDmH1RvaQx0iU6z~XlzNNiauMOqvexmV-01PKx0FDEy-BiBhUDXNuGGeiaWlHiIiDrl-CNVAQ~PKxSo62SQvhAEjUud21xs8jOejFLMi2wAvXS7~FT33kwKkvnLCuLRE3p-HvYQdpEvEKd0ro7~2z3lp6G4TWeQ__)]`}
    >
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
