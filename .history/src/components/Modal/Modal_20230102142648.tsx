import React, { useEffect } from "react";
import Button from "../Buttons/Button";
import ReactDOM from "react-dom";

type Props = {
  onClose: () => void;

  ModalDescription: string;
  ActionBar: React.ReactNode;
};

function Modal({ onClose, ModalDescription, ActionBar }: Props) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='fixed inset-0 w-full h-full bg-gray-900 bg-opacity-80 flex items-center justify-center'
      >
        {" "}
      </div>
      <div className='fixed top-64 left-64 right-64 bottom-88 flex flex-col bg-white space-y-2 border border-black rounded-md px-4 py-4'>
        <h1>{ModalDescription}</h1>
        <div className='flex items-center justify-end'>{ActionBar}</div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
