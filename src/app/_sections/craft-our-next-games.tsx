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
import { useGetAllGames } from "@/hooks/rtk-queries/useGetAllGames";

export const CraftOurNextGames = () => {
  const { gameSlide } = useGetAllGames();
  const OPTIONS: EmblaOptionsType = {
    containScroll: false,
    align: "center", // default alignment for mobile/tablet devices
    breakpoints: {
      "(min-width: 768px)": {
        // lg breakpoint in this line
        align: "center", // alignment for desktop devices
      },
    },
  };

  const SLIDES = gameSlide;
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

        <EmblaCarousel emblaRef={emblaRef}>
          <div className="embla__container">
            {SLIDES.map((slide, index) => (
              <div className="embla__slide" key={slide.id}>
                <OurNextGameCard content={slide} />
              </div>
            ))}
          </div>
          {/* TODO: need to clean this code and rebase previous state ui */}
        </EmblaCarousel>
      </Container>
    </section>
  );
};
