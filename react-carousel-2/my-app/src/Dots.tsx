import { GoDot } from 'react-icons/go';

type Images = {
  src: string;
  alt: string;
};

type Prop = {
  images: Images[];
  onDotsClick: (index: number) => void;
};

export function Dots({ images, onDotsClick }: Prop) {
  const dots = [];
  for (let i = 0; i < images.length; i++) {
    dots.push(
      <GoDot style={{ cursor: 'pointer' }} onClick={() => onDotsClick(i)}>
        {i}
      </GoDot>
    );
  }
  return <div className="dotContainer">{dots}</div>;
}
