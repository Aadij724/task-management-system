import React from 'react'
// import { Modal, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const TaskModal = ({show,onHide,info}) => {
  return (
    <Modal 
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {info && info.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>
          {info && info.details}
        </p>
        <h5>Status - {info && info.status}</h5>
        {info?.assignedTo=="none" && <h5>Assigned to - {info.assignedTo}</h5>}
        {/* <h4>Status - {info?.assignedTo && info.assignedTo}</h4> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TaskModal