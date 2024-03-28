import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

export default function App() {
  const [shouldOpen, setShouldOpen] = useState(false);

  function handleClick() {
    setShouldOpen(true);
  }

  function handleClose() {
    setShouldOpen(false);
    alert('It has been deleted!');
  }

  return (
    <>
      <button onClick={handleClick}>Delete me!</button>
      <Modal isOpen={shouldOpen} onClose={() => setShouldOpen(false)}>
        <p>Do you want to delete it?</p>
        <button onClick={() => setShouldOpen(false)}>Cancel</button>
        <button onClick={handleClose}>Delete</button>
      </Modal>
    </>
  );
}
