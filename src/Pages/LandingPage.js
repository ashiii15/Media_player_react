import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigatePage = useNavigate()
  const navigate =()=>{
    navigatePage('/homepage')

  }
  return (
    <>
    <Row className='align-items-center justify-content-center' style={{marginTop:'1.5rem'}}>
      <Col md={4}>
        <h5 className='mb-3'>Welcome to<br/> <span style={{color:'yellow'}}>Media player.com</span></h5>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta blandit diam, vitae ornare urna blandit convallis. Ut ac ipsum feugiat lorem vulputate blandit. 
        </p>
        <button  onClick={navigate}className='btn btn-info'>Get started</button>
      </Col>
      <Col md={6} style={{textAlign:'center'}}>
        <img src='https://blogs.windows.com/wp-content/uploads/prod/sites/44/2021/11/Logo.png' alt='vedio_image'></img>
      </Col>
    </Row>
    <div className='container mt-5 mb-5 d-flex flex-column align-items-center justify-content-center'>
      <h3>Features</h3>
      <div className='d-flex m-5'>
      <Card className='m-3'style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/1200x/0b/2d/26/0b2d26f202718839cf0c2d8a8c6c25ae.jpg" alt='image' style={{height:'250px',width:'285px'}} />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-3'style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://icones.pro/wp-content/uploads/2021/05/icone-facetime-violette.png" alt='image' style={{height:'250px',width:'285px'}} />
      <Card.Body>
        <Card.Title>Categorise videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/d-video-icon-purple-old-movie-button-vector-illustration-d-video-icon-purple-old-movie-button-237239156.jpg" alt='image' style={{height:'250px',width:'285px'}} />
      <Card.Body>
        <Card.Title>Watching videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='container border rounded p-5 border-secondary shadow mt-5 mb-5 d-flex justify-content-between align-items-center'>
        <div className='contenet'>
          <h4 className='text-warning'>Simple,fast and powerful</h4>
          <h6><span className='fs-5 me-6'>Play everything :</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h6>
          <h6><span className='fs-5 me-6'>Cateogory video :</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h6>
          <h6><span className='fs-5 me-6'>Managing history :</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h6>
        </div>
        <div className='video' ms-5>
        <iframe width="400" height="440" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </div>

    </div>
    </>
  )
}

export default LandingPage