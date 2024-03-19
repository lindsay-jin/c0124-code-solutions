import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText: string = 'React Image Bank';
const imageSrc: string = '/starry-sky.jpeg';
const imageCaption: string = 'A beautiful Image of Space';
const button: string = 'Click For Next Image';
const imageDescription: string =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas rerum quos asperiores quis in! Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos autem? Iusto hic impedit aspernatur labore quos nesciunt? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt laborum similique repellat?';

function App() {
  return (
    <>
      <Header title={headerText} />
      <ImageContainer src={imageSrc} />
      <ImageCaption caption={imageCaption} />
      <ImageDescription text={imageDescription} />
      <ButtonContainer button={button} />
    </>
  );
}

export default App;
