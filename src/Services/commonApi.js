import axios from "axios";
 export const commonApi = async(method,url,data)=>{
    let reqConfiq = {
        method,url,data,headers:{
            "Content-type" : "application/json"
        }

    }
   return await axios(reqConfiq).then((result)=>{
        return result
    })
    .catch((err)=>{
        return err
    })
}
