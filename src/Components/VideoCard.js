import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import {  addToHistory, deleteAVideo, } from '../Services/allApi';
import moment from 'moment/moment';

function VideoCard({displayData,setDeleteVideo}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    // get the timestamb
    let timeStamb = moment().format('MMMM Do YYYY, h:mm:ss a');
      console.log(timeStamb);
      const {caption,embeddedLink} = displayData
      const videoHistory ={
        caption,embeddedLink,timeStamb
      }
      // get a api call to post json server
       await addToHistory(videoHistory)



  }
  const deleteServerVideo = async (id)=>{
 const response = await deleteAVideo(id)
 setDeleteVideo(true)

  }

  return (
    <>
    {displayData &&
    <Card style={{ width: '100%',height:'220px' }}>
    <Card.Img variant="top" onClick={handleShow} style ={{width:'250px'}}src={displayData?.url} />
    <Card.Body className='d-flex justify-content-between'>
      <Card.Title>{displayData?.caption}</Card.Title>
      <i onClick={()=>deleteServerVideo(displayData?.id)} class="fa-solid fa-trash"></i>
     
    </Card.Body>
  </Card>
   }
  <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>{displayData?.caption}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <iframe width="100%" height="350" src={`${displayData?.embeddedLink}?autoplay=1`} title="Learn React 18 with Redux Toolkit – Full Tutorial for Beginners"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowullscreen></iframe>
  </Modal.Body>
  
</Modal>
</>
    )
}

export default VideoCard