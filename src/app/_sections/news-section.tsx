import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";

import { NewsCard } from "@/components/cards/news-card";
import { EmblaCarousel } from "@/components/carousle";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { usePrevNextButtons } from "@/components/carousle/embla/embla-carousel-arrow-buttons";
import { useGetAllBlogs } from "@/hooks/rtk-queries/useGetAllBlogs";

export const NewsSection = () => {
  const { blogSlide } = useGetAllBlogs();
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
  // const SLIDE_COUNT = 10;
  const SLIDES = blogSlide;
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <section className="py-10 pb-20 news-fetch-quest">
      <Container>
        <SectionHeading title="News from Fetch Quest" />
        <div className="flex justify-between items-center mt-6 mb-16">
          <ul className="flex gap-10 px-6 roboto-fonts">
            <li className="font-bold">Up Comming Games</li>
            <li className="flex gap-x-2 border-b-2 border-gray-500 pb-2 font-bold">
              <button className="uppercase"> View All </button>
              <ChevronDown />
            </li>
          </ul>

          <div className="flex gap-x-4">
            <button
              className="border p-1 px-3 border-[#7D3C98]"
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            >
              <ArrowLeft />
            </button>
            <button
              className="border p-1 px-3 border-[#7D3C98]"
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <EmblaCarousel emblaRef={emblaRef}>
          <div className="embla__container">
            {SLIDES.map((slide) => (
              <div className="embla__slide" key={slide.id}>
                <NewsCard content={slide} />
              </div>
            ))}
          </div>
        </EmblaCarousel>
      </Container>
    </section>
  );
};
