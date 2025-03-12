import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";

export const NewsCard = () => {
  return (
    <div className="border w-full border-[#7D3C98] space-y-2 p-4  rounded-lg">
      <Image
        src="https://s3-alpha-sig.figma.com/img/146b/548b/ba314b535d146d9b6d1cced6104e714e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CiJabbEKoHaIvyH1EIQoWqe13fB6pT2Ns2ifKDT3Yu7nUlz2wiqNKhn8uKYOfRgg2p1xvRMvLUNJ~XHOAxhCX6~ScW5RLONEAq~Hc2dniZHTFNxWkZ-U3WBXNcfHF-54VqoKHMRWlUsqbuwAGe2raQ1RwzBshCCXZWz7~-bfnZpyQtbGHk2bJ6YdxjWE5En0DiYoaQl1OJlMSvYaSroopzhGXSl47Vhbe16qOr5Zo3qZp4EHlTLOoFhEPD2qgsAfRxUqJgtScLFvA3MoF83AfOUuaMt47DSwvQMc0OzTFHTsZ-LCm5TIwkHtPyissGeFwowHcA1Ke9VDxTRgQ6k4yw__"
        alt="card photo"
        className="h-[18rem] w-full rounded-lg object-cover"
        width={100}
        height={100}
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
