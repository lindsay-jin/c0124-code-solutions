import { Dots } from './Dots';
import { ImageCard } from './ImageCard';
import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';
import { useEffect, useState } from 'react';

export type Images = {
  src: string;
  alt: string;
};

type Prop = {
  images: Images[];
};

export function Carousel({ images }: Prop) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [activeIndex]);

  function handlePrevClick() {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }

  function handleNextClick() {
    setActiveIndex((activeIndex + 1) % images.length);
  }

  function handleDotsClick(index: number) {
    setActiveIndex(index);
  }

  return (
    <div>
      <div className="topContainer">
        <PrevButton onPrevClick={handlePrevClick} />
        <ImageCard image={images[activeIndex]} />
        <NextButton onNextClick={handleNextClick} />
      </div>
      <div>
        <Dots images={images} onDotsClick={handleDotsClick} />
      </div>
    </div>
  );
}
