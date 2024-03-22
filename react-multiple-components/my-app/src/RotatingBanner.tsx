import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

type Prop = {
  items: string[];
};

export function RotatingBanner({ items }: Prop) {
  return (
    <>
      <Banner item={items[0]} />
      <PrevButton />
      <Indicators />
      <NextButton />
    </>
  );
}
