import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { FeedbackCard } from "@/components/cards";
import { EmblaCarousel } from "@/components/carousle";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/top-headings/SectionHeading";

export const UserFeedback = () => {
  const OPTIONS: EmblaOptionsType = {
    containScroll: false,
    align: "start",
  };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const [emblaRef] = useEmblaCarousel(OPTIONS);
  return (
    <div className="py-12 md:py-24 user-testimonials overflow-hidden">
      <Container>
        <div className="pb-6 md:pb-10">
          <SectionHeading title="User Testimonial" />
        </div>
        <div className="px-4 sm:px-8 md:px-12 lg:px-20">
          <EmblaCarousel emblaRef={emblaRef}>
            <div className="embla__container">
              {SLIDES.map((index) => (
                <div className="embla__slide" key={index}>
                  <FeedbackCard />
                </div>
              ))}
            </div>
          </EmblaCarousel>
        </div>
      </Container>
    </div>
  );
};
