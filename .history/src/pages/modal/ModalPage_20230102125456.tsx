import React from "react";
import Modal from "../../components/Modal/Modal";

type Props = {};

function ModalPage({}: Props) {
  return (
    <>
      Welcome to modal page,please click open modal button to open modal!
      <Modal />
    </>
  );
}

export default ModalPage;
