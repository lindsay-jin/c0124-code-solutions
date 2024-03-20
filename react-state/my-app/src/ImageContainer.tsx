import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [image, changeImage] = useState(0);

  function handleClick() {
    if (image >= imageSrc.length - 1) {
      changeImage(0);
    } else {
      changeImage(image + 1);
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={imageSrc[image]}
          alt="space-image"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
