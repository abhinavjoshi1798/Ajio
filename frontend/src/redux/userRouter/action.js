import axios from "axios"
import { GETALL_USER_FAILURE, GETALL_USER_REQUEST, GETALL_USER_SUCCESS } from "./actionTypes"

export const GetUsers=(obj)=>async(dispatch)=>{
    dispatch({type:GETALL_USER_REQUEST})
    try{
        const res=await axios.get("https://ajio-backend-2fat.onrender.com/user/getusers",obj) 
        dispatch({type:GETALL_USER_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:GETALL_USER_FAILURE})
    }
}