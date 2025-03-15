import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";

import { NewsCard } from "@/components/cards/news-card";
import { EmblaCarousel } from "@/components/carousle";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/top-headings/SectionHeading";

export const NewsSection = () => {
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
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const [emblaRef] = useEmblaCarousel(OPTIONS);
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
            <button className="border p-1 px-3 border-[#7D3C98]">
              <ArrowLeft />
            </button>
            <button className="border p-1 px-3 border-[#7D3C98]">
              <ArrowRight />
            </button>
          </div>
        </div>
        <EmblaCarousel emblaRef={emblaRef}>
          <div className="embla__container">
            {SLIDES.map((index) => (
              <div className="embla__slide" key={index}>
                <NewsCard />
              </div>
            ))}
          </div>
        </EmblaCarousel>
      </Container>
    </section>
  );
};
