import axios from "axios"
import { ORDER_GET_FAILURE, ORDER_GET_REQUEST, ORDER_GET_SUCCESS, ORDER_POST_FAILURE, ORDER_POST_REQUEST } from "./actionTypes"

export const AddOrder=(obj,token)=>async(dispatch)=>{
    dispatch({type:ORDER_POST_REQUEST})
    try{
        const res=await axios.post("https://ajio-backend-2fat.onrender.com/order/addproduct",obj,{
            headers:{
                Authorization:token
            }
        })
        return {status:res.data.status}
    }catch(err){
        dispatch({type:ORDER_POST_FAILURE})
    }
}


export const GetOrders=(token)=>async(dispatch)=>{
    dispatch({type:ORDER_GET_REQUEST})
    try{
        const res= await axios.get(`https://ajio-backend-2fat.onrender.com/order/getorders`,{
            headers:{
                Authorization:token
            }
        })
        console.log(res)
        dispatch({type:ORDER_GET_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({
            type:ORDER_GET_FAILURE
        })
    }
}