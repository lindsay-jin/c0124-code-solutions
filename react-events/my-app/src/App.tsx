import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';
import { useState } from 'react';

const headerText = 'React Image Bank';
const buttonText = 'Click for Next Image';

const imageData = [
  {
    src: '/starry-sky.jpeg',
    caption: 'A Beautiful Image of Space',
    description: 'This is a wonderful sky full of stars!',
  },
  {
    src: '/cool-kitty.jpg',
    caption: 'A Cool Cat',
    description: 'This is a picture of a very cool cat!',
  },
  {
    src: '/cool-car.jpg',
    caption: 'A Cool Car',
    description: 'This is a picture of a very cool car!',
  },
];

export function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= imageData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageData[index].src} />
      <ImageCaption imageCap={imageData[index].caption} />
      <ImageDescription imageDescrip={imageData[index].description} />
      <ButtonContainer onImageClick={handleClick} buttonText={buttonText} />
    </>
  );
}
