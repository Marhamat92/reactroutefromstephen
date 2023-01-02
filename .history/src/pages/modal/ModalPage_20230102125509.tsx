import React from "react";
import Modal from "../../components/Modal/Modal";

type Props = {};

function ModalPage({}: Props) {
  return (
    <>
      <h1>Welcome to modal page,please click open modal button to open modal!</h1>
      <Modal />
    </>
  );
}

export default ModalPage;
