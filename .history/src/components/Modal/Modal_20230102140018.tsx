import React, { useEffect } from "react";
import Button from "../Buttons/Button";

type Props = {
  onClose: () => void;
  onAcceptModal: () => void;
};

function Modal({ onClose, onAcceptModal }: Props) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div>
      <div
        onClick={onClose}
        className='fixed inset-0 w-full h-full bg-gray-900 bg-opacity-70 flex items-center justify-center'
      >
        {" "}
      </div>
      <div className='fixed top-64 left-64 right-64 bottom-88 flex flex-col bg-white space-y-2 border border-black rounded-md px-4 py-4'>
        <h1>
          If you wish to travel to another country please click accept
          button.klrvjdkjvb lklknvfr lşvlşvjfdşlv vşfdkvşlfdkvşljşj
        </h1>
        <div className='flex items-center justify-end'>
          <Button onClick={onAcceptModal} success rounded>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
