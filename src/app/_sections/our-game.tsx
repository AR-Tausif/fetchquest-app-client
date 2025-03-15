import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { GameCard } from "@/components/cards";
import { EmblaCarousel } from "@/components/carousle";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/carousle/embla/embla-carousel-arrow-buttons";
import { Container } from "@/components/container";

export const OurGameSection = () => {
  const OPTIONS: EmblaOptionsType = {
    containScroll: false,
    align: "center", // default alignment for mobile/tablet devices
    breakpoints: {
      "(min-width: 768px)": {
        // lg breakpoint in this line
        align: "start", // alignment for desktop devices
      },
    },
  };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <section
      id="our-game-section"
      className="our-games min-h-screen low-opacity-bg-image "
    >
      <Container>
        <div className="py-4 pt-20 flex justify-between items-center">
          {/* <h2 className="uppercase text-white font-extrabold text-7xl our-game-text-stroke">
            our games
          </h2> */}
          <img
            src="/images/Our-Games.png"
            alt="stroke image"
            className="w-[70vw] md:w-[60vw] lg:w-[40vw]"
          />
          <div className="embla__controls !hidden md:!flex">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
        {/* <EmblaCarousel slides={SLIDES} emblaRef={emblaRef} /> */}
        <EmblaCarousel emblaRef={emblaRef}>
          <div className="embla__container">
            {SLIDES.map((index) => (
              <div className="embla__slide" key={index}>
                <GameCard />
              </div>
            ))}
          </div>
          {/* TODO: need to clean this code and rebase previous state ui */}
        </EmblaCarousel>
      </Container>
    </section>
  );
};
