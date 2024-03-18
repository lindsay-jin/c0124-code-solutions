// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Header } from './Header.tsx';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer.tsx';

function App() {
  return (
    <>
      <Header />
      <ImageContainer />
      <ImageCaption />
      <ImageDescription />
      <ButtonContainer />
    </>
  );
}

export default App;
