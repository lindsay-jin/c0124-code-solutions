import { useState } from 'react';

type Props = {
  imageText: string[];
};

export function ImageDescription({ imageText }: Props) {
  const [text, changeText] = useState(0);
  function handleClick() {
    if (text >= imageText.length - 1) {
      changeText(0);
    } else {
      changeText(text + 1);
    }
  }
  return (
    <div>
      <p onClick={handleClick}>{imageText[text]}</p>
    </div>
  );
}
