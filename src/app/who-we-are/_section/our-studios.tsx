import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { AppButton } from '@/components/buttons/app-button';
import { EmblaCarousel } from '@/components/carousle';
import { usePrevNextButtons } from '@/components/carousle/embla/embla-carousel-arrow-buttons';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/top-headings/SectionHeading';

export const OurStudios = () => {
  const OPTIONS: EmblaOptionsType = { containScroll: false, align: 'start' };
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
    <div className='our-studio-section py-24'>
      <Container>
        <SectionHeading className='text-center' title='our studios' />
        <div className='flex items-center justify-center gap-x-4'>
          <AppButton
            variant='outline'
            className='px-3'
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            <ArrowLeft className='text-[#DA5DA3]' />
          </AppButton>
          <EmblaCarousel emblaRef={emblaRef}>
            <div className='embla__container'>
              {SLIDES.map((index) => (
                <div className='embla__slide' key={index}>
                  <img
                    src='/images/pages/who-we-are/section-two/slide-img-1.png'
                    alt='Our studio image'
                    className='w-full rounded-md'
                  />
                </div>
              ))}
            </div>
            {/* TODO: need to clean this code and rebase previous state ui */}
          </EmblaCarousel>
          <AppButton
            variant='outline'
            className='px-3'
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            <ArrowRight className='text-[#DA5DA3]' />
          </AppButton>
        </div>
      </Container>
    </div>
  );
};
