import { baseUrl } from "./baseUrl";
import { commonApi } from "./commonApi";

// upload  video api
export const  uploadVideo = async (video)=>{
    // adding video in json server and return response to Add component
  return await commonApi("POST",`${baseUrl}/videos`,video)
}
// get all videos from json server
 export const getAllVideo = async()=>{
    return await commonApi("GET",`${baseUrl}/videos`,'')
}

// get a single video from json server
export const getAVideo = async(id)=>{
return await commonApi("GET",`${baseUrl}/videos/${id}`,'')
}
// delete a single video from server
 export const deleteAVideo =async(id)=>{
   return  await commonApi("DELETE",`${baseUrl}/videos/${id}`,{})
}
// insert video in watch history
export const addToHistory = async(videoHistory)=>{
  return await commonApi('POST',`${baseUrl}/history`,videoHistory)

}
// insert video in watch history
export const getHistory = async()=>{
   return await commonApi('GET',`${baseUrl}/history`,'')
 
 }

// add category from server and return category
export const addCategory =async(body)=>{
    return  await commonApi("POST",`${baseUrl}/category`,body)
 }
 // get all category from server and return category
export const getAllCategory =async()=>{
    return  await commonApi("GET",`${baseUrl}/category`,'')
 }
 export const deleteCategory =async(id)=>{
  return  await commonApi("DELETE",`${baseUrl}/category/${id}`,{})
}
