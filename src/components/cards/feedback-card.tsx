import { Star } from "lucide-react";
import Image from "next/image";

export const FeedbackCard = () => {
  return (
    <div className="p-8 border bg-red-50 rounded-lg border-[#DA5DA3]">
      <div className="h-full flex items-start">
        <div className="flex-grow space-y-5">
          <div className="flex gap-2 py-2">
            <Star fill="#FFAC37" stroke="none" />
            <Star fill="#FFAC37" stroke="none" />
            <Star fill="#FFAC37" stroke="none" />
            <Star fill="#FFAC37" stroke="none" />
            <Star fill="#FFAC37" stroke="none" />
          </div>
          <p className="leading-relaxed pb-4 border-b text-sm">
          One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.
          </p>
          <a className="inline-flex items-center pt-4">
            <Image
              alt="blog"
              src="/images/dummy.png"
              className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
              width={200}
              height={200}
            />
            <span className="flex-grow flex flex-col pl-3">
              <span className="title-font font-medium text-gray-900">
                Holden Caulfield
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
