import React from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Buttons/Button";
import { useState } from "react";

type Props = {};

function ModalPage({}: Props) {
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <h1 className='text-green-500 text-2xl font-bold'>
        Welcome to modal page,please click open modal button to open modal!
      </h1>
      <Button onClick={onToggleModal} primary rounded>
        {showModal ? "Open Modal" : "Close Modal"}
      </Button>
      {showModal && <Modal />}
    </>
  );
}

export default ModalPage;
