import { useState } from "react";
import { Modal,Button,Form } from "react-bootstrap";

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-flex align-items-center'>
      <h5>Add a new video</h5>
      <button type="btn" onClick={handleShow}>
      <i className="fa-sharp fa-solid fa-circle-plus fs-4" style={{color: '#1c5ab0'}}></i>         </button>
    </div>
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Upload a video</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>please fill the form!!!</p>
     <Form>
     <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Control type="text" placeholder="video id" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCaption">
        <Form.Control type="text" placeholder="Video Caption" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Control type="text" placeholder="Video Cover Image URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLink">
        <Form.Control type="text" placeholder="Youtube video Link" />
        </Form.Group>
     </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary">Upload</Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}

export default Add