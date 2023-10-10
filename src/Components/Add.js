import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { uploadVideo } from "../Services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add({setUploadVideoServerResponse}) {
  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    embeddedLink: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const extratLink = (e) => {
    let { value } = e.target;
    let embed = `https://www.youtube.com/embed/${value.slice(-11)}`;
    console.log(embed);
    setVideo({ ...video, embeddedLink: embed, youtubeLink: value });
    // console.log(`${www.youtube.com/embed}value.slice(-11)`);

    console.log(e.target.value);
    //  let  embedded = `${https://www.youtube.com/embed}`
    // https://www.youtube.com/watch?v=Rh3tobg7hEo
    // "https://www.youtube.com/embed/Rh3tobg7hEo
  };
  const clickHandler = async () => {
    const { id, caption, url, embeddedLink } = video;
    if (!id || !caption || !url || !embeddedLink) {
      toast.warning("please fill the form correctly");
    } else {
      const response = await uploadVideo(video);
      console.log(response);
      if(response.status >=200 && response.status <300){
        // set server response
        setUploadVideoServerResponse(response.data)
        handleClose();
          toast.success(`"${response.data.caption}" is uploaded sucessfully`);
      } else{
        toast.warning("please provide unique id")
      }
      
    }
  };
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Add a new video</h5>
        <button type="btn" onClick={handleShow}>
          <i
            className="fa-sharp fa-solid fa-circle-plus fs-4"
            style={{ color: "#1c5ab0" }}
          ></i>{" "}
        </button>
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
              <Form.Control
                type="text"
                placeholder="video id"
                onChange={(e) => setVideo({ ...video, id: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCaption">
              <Form.Control
                type="text"
                placeholder="Video Caption"
                onChange={(e) =>
                  setVideo({ ...video, caption: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Control
                type="text"
                placeholder="Video Cover Image URL"
                onChange={(e) => setVideo({ ...video, url: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLink">
              <Form.Control
                type="text"
                placeholder="Youtube video Link"
                onChange={extratLink}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={clickHandler}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        rtl = {false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Add;
