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
import Image from "next/image";
import { IGameCardContent } from "@/types/home-page";

export const OurGameSection = () => {
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
  
  const gameSlides: IGameCardContent[] = [
    {
      id: 1,
      posterImg: "/images/posters/poster-6.jpg",
      gameName: "Introductiong check6 extraction dlc",
      date: "12 Feb 2024",
      site: "Visit Site",
    },
    {
      id: 2,
      posterImg: "/images/posters/poster-7.webp",
      gameName: "Introductiong check6 extraction dlc",
      date: "18 March 2024",
      site: "Visit Site",
    },
    {
      id: 3,
      posterImg: "/images/posters/poster-8.webp",
      gameName: "Introductiong check6 extraction dlc",
      date: "19 Apr 2024",
      site: "Visit Site",
    },
    {
      id: 4,
      posterImg: "/images/posters/poster-9.jpg",
      gameName: "Introductiong check6 extraction dlc",
      date: "11 Feb 2025",
      site: "Visit Site",
    },
    {
      id: 5,
      posterImg: "/images/posters/poster-10.jpg",
      gameName: "Introductiong check6 extraction dlc",
      date: "10 Sep 2026",
      site: "Visit Site",
    },
    {
      id: 6,
      posterImg: "/images/posters/poster-11.png",
      gameName: "Introductiong check6 extraction dlc",
      date: "21 Aug 2021",
      site: "Visit Site",
    },
    {
      id: 7,
      posterImg: "/images/posters/poster-12.jpg",
      gameName: "Introductiong check6 extraction dlc",
      date: "15 Dec 2024",
      site: "Visit Site",
    },
  ];
  const SLIDES = gameSlides;
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
          <Image
            src="/images/Our-Games.png"
            alt="stroke image"
            className="w-[70vw] md:w-[60vw] lg:w-[40vw]"
            width={1000}
            height={1000}
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
            {SLIDES.map((slide, index) => (
              <div className="embla__slide" key={slide.id}>
                <GameCard content={slide} />
              </div>
            ))}
          </div>
          {/* TODO: need to clean this code and rebase previous state ui */}
        </EmblaCarousel>
      </Container>
    </section>
  );
};
