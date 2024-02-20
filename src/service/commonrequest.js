import axios from "axios";


export const commonRequest = async (method, url, body) => {



  let reqConfig = {
    url,
    method,
    data: body,
    headers: {
      "content-type": "application/json"
 
    }
  }




  return await axios(reqConfig).then((response) => {
    return response
  }).catch((error) => {
    return error
  })

}