import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const KidsModal = (props) => {
  const {
    kidName,
    age,
    petName,
    score,
    height,
    favFood,
    weight,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{kidName}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{kidName}</ModalHeader>
        <ModalBody>
            <p>Age: {age}</p>
            <p>Pet Name: {petName}</p>
            <p>Score: {score}</p>
            <p>Height: {height}</p>
            <p>Favorite Food: {favFood}</p>
            <p>Weight: {weight}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default KidsModal;