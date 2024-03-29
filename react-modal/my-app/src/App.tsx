import { Modal } from './Modal';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [shouldOpen, setShouldOpen] = useState(false);
  //shoouldOpen is the state reflecting whether it's open or closed

  function handleDelete() {
    setShouldOpen(false);
    alert('The item has been deleted.');
  }

  return (
    <>
      <button onClick={() => setShouldOpen(true)}>Delete me!</button>
      <Modal isOpen={shouldOpen} onClose={() => setShouldOpen(false)}>
        <p>Are you sure you want to delete it?</p>
        <button onClick={() => setShouldOpen(false)}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
      {/* The JSX inside the Modal tag (<p>, <button>) is passed to Modal component as children,
      and will render inside the <dialog> element */}
    </>
  );
}

// //Before modularizing the dialog

// import { useRef } from 'react';
// import './App.css';

// export default function App() {
//   const modal = useRef<HTMLDialogElement>(null);

//   function handleDelete() {
//     modal.current?.close();
//     alert('The item has been deleted.');
//   }

//   return (
//     <>
//       <button onClick={() => modal.current?.showModal()}>Delete me!</button>
//       <dialog ref={modal}>
//         <p>Are you sure you want to delete it?</p>
//         <button onClick={() => modal.current?.close()}>Cancel</button>
//         <button onClick={handleDelete}>Delete</button>
//       </dialog>
//     </>
//   );
// }
