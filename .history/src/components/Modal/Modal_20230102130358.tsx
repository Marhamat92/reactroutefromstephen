import React from "react";
import Button from "../Buttons/Button";

type Props = {};

function Modal({}: Props) {
  return (
    <div className='flex flex-col w-full'>
      <h1>
        If you wish to travel to another country please click accept button
      </h1>
      <div className='flex items-center justify-end'>
        <Button success rounded>
          Accept
        </Button>
      </div>
    </div>
  );
}

export default Modal;
