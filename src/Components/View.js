import React from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideo } from '../Services/allApi'
import { useEffect } from 'react'
import { useState } from 'react'

function View({uploadVideoServerResponse}) {
  const [allVideos,getAllVideos] = useState([])
  const [deleteVideo,setDeleteVideo] = useState(false)
  const getAllUploadedVideo = async()=>{
    const {data} = await getAllVideo()
    // console.log(data);
    getAllVideos(data)

}
useEffect(()=>{
  getAllUploadedVideo()
  setDeleteVideo(false)

},[uploadVideoServerResponse,deleteVideo])
console.log(allVideos);
  
  return (
    <>
    <Row>
      {
      allVideos.length > 0 ?
      allVideos.map((video)=>{
       return <Col style={{width:'auto'}} sm={12} md={6} lg={4}>
        <VideoCard displayData = {video} setDeleteVideo={setDeleteVideo}/>
        </Col>
      })
      :<p>sorry nothing to display</p>
}
    </Row>
    </>
  )
}

export default View