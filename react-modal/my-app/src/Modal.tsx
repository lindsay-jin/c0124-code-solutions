import React, { ReactNode, useEffect, useRef } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
export function Modal({ children, isOpen, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  function handleEscape(event: React.KeyboardEvent<HTMLDialogElement>) {
    event.key === 'Escape' ? onClose() : '';
  }

  useEffect(() => {
    isOpen ? modal.current?.showModal() : modal.current?.close();
  }, [isOpen]);

  return (
    <>
      <dialog ref={modal} onKeyDown={handleEscape}>
        {children}
      </dialog>
      {/* The current property of ref object gives you access to the <dialog> DOM element */}
    </>
  );
}
