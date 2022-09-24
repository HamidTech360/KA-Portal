import axios from "axios"
import config from '../../config/index.json'

export const postRequest = async({url, data})=>{
   
       return await axios.post(`${config.apiUrl}/${url}`, data, {
            headers:{
                authorization:`Bearer ${localStorage.getItem('authToken')}`
            }
        })
    
}

export const getRequest = async({url})=>{
   
    return await axios.get(`${config.apiUrl}/${url}`, {
         headers:{
             authorization:`Bearer ${localStorage.getItem('authToken')}`
         }
     })
 
}

