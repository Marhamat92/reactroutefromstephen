import React from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Buttons/Button";

type Props = {};

function ModalPage({}: Props) {
  return (
    <>
      <h1 className='text-green-500 text-2xl font-bold'>
        Welcome to modal page,please click open modal button to open modal!
      </h1>
      <Button primary>Open Modal</Button>
      <Modal />
    </>
  );
}

export default ModalPage;
