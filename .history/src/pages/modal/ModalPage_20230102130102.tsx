import React from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Buttons/Button";
import { useState } from "react";

type Props = {};

function ModalPage({}: Props) {
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <h1 className='text-green-500 text-2xl font-bold'>
        Welcome to modal page,please click open modal button to open modal!
      </h1>
      <Button onClick={onToggleModal} primary rounded>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </>
  );
}

export default ModalPage;
