import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addCategory, deleteCategory, getAllCategory } from "../Services/allApi";


function Cateogory() {
  const [show, setShow] = useState(false);
  const [addCategorie, setaddCategorie] = useState("")
  const[category,setCategory] =useState([])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addHandler = async()=>{
    // make api call
    if(addCategorie){
      const body ={
        addCategorie
  
      }
    const response = await addCategory(body)
    if(response.status >=200 && response.status <300){
      setaddCategorie('')
      handleClose()
      getUserInputCategory()

    }
    else{
      toast.warning('please try after sometimes')
    }

    console.log(response);


    }
    else{
      toast.warning("please fill the form correctly");

    }
    
  }
 const getUserInputCategory =async ()=>{
 const {data} =  await getAllCategory()
 setCategory(data)
 }
 useEffect(()=>{
  getUserInputCategory()
 },[])
 console.log(category);
//  remove category
 const removeCategory = async(id)=>{
  // api call for remove item
  await deleteCategory(id)
  getUserInputCategory()

 }


  return (
    <>
    <div>
      <Button onClick={handleShow} style={{backgroundColor:'#9933cc'}}>
        Add new Categorise
      </Button>
      </div>
      <div>
      {
        category?category.map((item)=>{
          return <div key={item.id} className="">
            <div className="justify-content-between d-flex">
              <h5>{item.addCategorie}</h5>
            <button type="btn" onClick={()=>removeCategory(item?.id)}>
              <i className="fa-solid fa-trash text-danger"></i>
              </button>

            </div>
          </div>
        })
        :<p>nothing display</p>
      }
      </div>

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
        <Form.Group className="mb-3" controlId="formBasicCaption">
        <Form.Control type="text" placeholder="Enter category name" onChange={(e)=>setaddCategorie(e.target.value)} />
        </Form.Group>
        
     </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button onClick={addHandler} variant="primary">Add</Button>
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

export default Cateogory;
