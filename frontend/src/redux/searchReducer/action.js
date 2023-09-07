import axios from "axios"
import { SEARCH_GET_FAILURE, SEARCH_GET_REQUEST, SEARCH_GET_SUCCESS } from "./actionTypes"

export const SearchProduct=(obj)=>async(dispatch)=>{
    dispatch({type:SEARCH_GET_REQUEST})
    try{
        const res=await axios.get("https://ajio-backend-2fat.onrender.com/products/search",obj)
        dispatch({type:SEARCH_GET_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:SEARCH_GET_FAILURE})
    }
}