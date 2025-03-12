import { EmblaViewportRefType } from "embla-carousel-react";
import React from "react";

import "./styles/embla.css";

type PropType = {
  emblaRef: EmblaViewportRefType;
  children: React.ReactNode;
};

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { emblaRef, children } = props;

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        {children}
      </div>

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div> */}
    </section>
  );
};
