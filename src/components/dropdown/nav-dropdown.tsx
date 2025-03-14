import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { DropdownGameCard, GameCard } from "../cards";
import { EmblaCarousel } from "../carousle";

export const NavDropdown = ({
  dropdownOpen,
  onMouseLeave,
}: {
  dropdownOpen: boolean;
  onMouseLeave: VoidFunction;
}) => {
  const OPTIONS: EmblaOptionsType = { containScroll: false, align: "start" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const [emblaRef] = useEmblaCarousel(OPTIONS);

  return (
    <div
      className={`nav-dropdown mt-1 shadow-xs !bg-[#2E2E2E] py-8 dark:bg-gray-800 dark:border-gray-600 absolute w-full overflow-hidden z-[999] ${
        dropdownOpen ? "block" : "hidden"
      }`}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-screen-2xl mx-auto">
       
      </div>
    </div>
  );
};

