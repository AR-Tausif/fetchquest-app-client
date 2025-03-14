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
      className={`mt-1 shadow-xs !bg-[#2E2E2E] py-8 dark:bg-gray-800 dark:border-gray-600 absolute w-full overflow-hidden z-[999] ${
        dropdownOpen ? "block" : "hidden"
      }`}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-center">
        {/* <h2 className="text-primary font-extrabold text-[6vmin] tracking-[5px] [text-stroke:1px_#fff] [-webkit-text-stroke:1px_#C2589E] [-webkit-text-fill-color:transparent] bg-white rounded-lg p-4 px-8">Careers</h2> */}
        

        <GradientText/>

        </div>
        <p className="text-white">Up Coming Games</p>
        <EmblaCarousel emblaRef={emblaRef}>
          <div className="embla__container my-4">
            {SLIDES.map((index) => (
              <div className="embla__slide" key={index}>
                <DropdownGameCard />
              </div>
            ))}
          </div>
          {/* TODO: need to clean this code and rebase previous state ui */}
        </EmblaCarousel>
      </div>
    </div>
  );
};


function GradientText() {
  return (
    <div className="inline-block bg-white rounded-lg p-4 px-8 w-[33%]">
      <svg width="100%" height="100" className="text-primary">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0000FF' }} />
            <stop offset="100%" style={{ stopColor: '#FF0000' }} />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          className="font-extrabold  tracking-[5px] uppercase text-[6vmin]"
          fill="transparent"
          stroke="url(#grad1)"
          strokeWidth="1"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Our Games
        </text>
      </svg>
    </div>
  );
} 