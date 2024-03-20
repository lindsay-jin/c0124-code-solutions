import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/space1.jpeg', '/space2.jpeg'];
const imageCap = [
  'A Beautiful Image of Space',
  'image of clouds',
  'image of stars',
];
const imageText = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit aspernatur labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt laborum similique repellat ? ',
  'Watercolor rendering of clouds.',
  'Picture of the night sky captured',
];
const buttonText = 'Click for Next Image';

function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageText={imageText} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}

export default App;
