import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { useState } from 'react';

type Prop = {
  items: string[];
};

export function RotatingBanner({ items }: Prop) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(4);
  return (
    <>
      <Banner item={items[currentIndex]} />
      <PrevButton />
      <Indicators count={items.length} index={currentIndex} />
      <NextButton />
    </>
  );
}
