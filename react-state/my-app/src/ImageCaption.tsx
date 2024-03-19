import { useState } from 'react';

type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [caption, changeCaption] = useState(0);
  function handleClick() {
    if (caption >= imageCap.length - 1) {
      changeCaption(0);
    } else {
      changeCaption(caption + 1);
    }
  }
  return (
    <div>
      <h3 onClick={handleClick}>{imageCap[caption]}</h3>
    </div>
  );
}
