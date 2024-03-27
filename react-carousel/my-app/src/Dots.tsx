import { GoDot, GoDotFill } from 'react-icons/go';
import { Images } from './Carousel';

type Prop = {
  images: Images[];
  currentIndex: number;
  onDotsClick: (index: number) => void;
};

export function Dots({ images, onDotsClick, currentIndex }: Prop) {
  const dots = [];
  for (let i = 0; i < images.length; i++) {
    const Dot = currentIndex === i ? GoDotFill : GoDot;
    dots.push(
      <Dot
        key={i}
        style={{ cursor: 'pointer' }}
        onClick={() => onDotsClick(i)}
      />
    );
  }
  return <div className="dotContainer">{dots}</div>;
}
