import { BASE_URL } from "./baseurl"
import { commonRequest } from "./commonrequest"



export const addProperty = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/property`, body)
  }
  

  export const getProperty = async () => {
    return await commonRequest("GET", `${BASE_URL}/property`, "")
  }