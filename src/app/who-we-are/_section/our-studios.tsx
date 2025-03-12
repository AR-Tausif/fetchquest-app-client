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
                    src='https://s3-alpha-sig.figma.com/img/a633/0d1d/c5d715af9db17cca864eef07d92d6969?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A~nlEnJpwHCjWHxDJzzvUYdr4hDOS635Tdq-wKRaiWljdnAgB8Q~1o1VFtF39cbRrcz5Ew6BQdjMIjtIiVq4aakTlxjOkHS8Umb1NJ4xh6jNK3094MWFcHXoGatfIQrBfmJvpQPdt0OgV2Ew8OXtdY7vndoAjd5bYyc3-Ol2hKUamGDqFFFatO8JYvaziRtO0p55YzLtSdKqmEflhLvrxy0ZHBgQ1lHq0QFC5wfusqWDNjOMVriF9cN4WC0gWn7938qsOxkxCOhK4gZYd5AZbAPE-qi3QQMU~wafyt0ENuRQQVLa1gq0ZImH~EJde2lkSf6g3WP~GJWm0zdiibYEXg__'
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
