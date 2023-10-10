import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function Cateogory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} style={{backgroundColor:'#9933cc'}}>
        Add new Categorise
      </Button>{" "}
      <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Add new category</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>please fill the form!!!</p>
     <Form>
     <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Control type="text" placeholder="Category id" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCaption">
        <Form.Control type="text" placeholder="Enter category name" />
        </Form.Group>
        
     </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary">Add</Button>
    </Modal.Footer>
  </Modal>
    </>
  );
}

export default Cateogory;
