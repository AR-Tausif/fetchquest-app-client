import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { OurNextGameCard } from "@/components/cards/our-next-game-card";
import { EmblaCarousel } from "@/components/carousle";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/carousle/embla/embla-carousel-arrow-buttons";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/top-headings/SectionHeading";

export const CraftOurNextGames = () => {
  const OPTIONS: EmblaOptionsType = {
    containScroll: false,
    align: "start", // default alignment for mobile/tablet devices
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
    <section className="craft-next-game-section low-opacity-bg-image flex flex-col justify-center pb-20 overflow-hidden">
      {/* TODO: here the top of the div has a style need to chage later */}
      <Container>
        <div className="p-4 py-16 flex justify-between items-center">
          {/* <h2 className="uppercase text-white font-extrabold text-7xl">
            Craft our next game -
          </h2> */}
          <SectionHeading
            className="text-white font-extrabold"
            title="Craft Our Next Game-"
          />
          <div className="embla__controls">
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
                <OurNextGameCard />
              </div>
            ))}
          </div>
        </EmblaCarousel>
      </Container>
    </section>
  );
};
