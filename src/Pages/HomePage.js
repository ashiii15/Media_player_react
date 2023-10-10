import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Cateogory from '../Components/Cateogory'
import { useState } from 'react'

function HomePage() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
    <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
    <Link to='/watchhistory' style={{textDecoration:'none'}}>Watch history</Link>
    </div>
    <div className='container-fluid mt-5 mb-5 d-flex justify-content-between align-items-center'>
    <div className='all-videos'>
      <h3>All videos</h3>
      <View uploadVideoServerResponse={uploadVideoServerResponse}/>
    </div>
    <Cateogory/>

    </div>
    </>
  )
}

export default HomePage