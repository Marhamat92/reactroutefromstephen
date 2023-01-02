import React from "react";
import Button from "../Buttons/Button";

type Props = {};

function Modal({}: Props) {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-20 flex items-center justify-center'>
      <div className='flex flex-col bg-white space-y-2 border border-black rounded-md px-4 py-4'>
        <h1>
          If you wish to travel to another country please click accept button
        </h1>
        <div className='flex items-center justify-end'>
          <Button success rounded>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
