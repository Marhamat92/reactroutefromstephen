import React from "react";

type Props = {};

function Modal({}: Props) {
  return (
    <div className='flex flex-col width-full'>
      <h1>
        If you wish to travel to another country please click accept button
      </h1>
      <button>Accept</button>
    </div>
  );
}

export default Modal;
