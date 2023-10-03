import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card style={{ width: '100%',height:'200px' }}>
    <Card.Img variant="top" onClick={handleShow} style ={{width:'286px'}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMIXO52XOhFmGArL-qB44903VThFDfSs1ZD5Os3OK&s" />
    <Card.Body className='d-flex justify-content-between'>
      <Card.Title>Card Title</Card.Title>
      <i class="fa-solid fa-trash"></i>
     
    </Card.Body>
  </Card>
  <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Video caption</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <iframe width="100%" height="350" src="https://www.youtube.com/embed/2-crBg6wpp0?autoplay=1" title="Learn React 18 with Redux Toolkit – Full Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Modal.Body>
  
</Modal>
</>
    )
}

export default VideoCard