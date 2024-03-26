import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { useState } from 'react';

type Prop = {
  items: string[];
};

export function RotatingBanner({ items }: Prop) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleForward() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleBackward() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleIndicatorClick(clickedIndex: number) {
    setCurrentIndex(clickedIndex);
  }

  return (
    <>
      <Banner item={items[currentIndex]} />
      <PrevButton onPrevClick={handleBackward} />
      <Indicators
        count={items.length}
        index={currentIndex}
        onIndicatorClick={handleIndicatorClick}
      />
      <NextButton onNextClick={handleForward} />
    </>
  );
}
