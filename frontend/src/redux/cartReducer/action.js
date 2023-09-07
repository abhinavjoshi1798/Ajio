import axios from "axios"
import { CART_DELETE_FAILURE, CART_DELETE_REQUEST, CART_DELETE_SUCCESS, CART_GET_FAILURE, CART_GET_REQUEST, CART_GET_SUCCESS, CART_PATCH_FAILURE, CART_PATCH_REQUEST, CART_POST_FAILURE, CART_POST_REQUEST, CART_POST_SUCCESS } from "./actionTypes"

export const  AddtoCart=(obj,token)=>async(dispatch)=>{
    dispatch({type:CART_POST_REQUEST})
    try{
        const res=await axios.post("https://ajio-backend-2fat.onrender.com/cart/addproduct",obj,{headers:{
            Authorization:token
        }})
        dispatch({type:CART_POST_SUCCESS})
        return res.data.status
    }catch(err){
        dispatch({type:CART_POST_FAILURE})
    }
}

export const GetCardData=(userId,token)=>async(dispatch)=>{
    dispatch({type:CART_GET_REQUEST})
    try{
        let res=await axios.get(`https://ajio-backend-2fat.onrender.com/cart/getcart/${userId}`,{headers:{
            Authorization:token
        }})
        dispatch({type:CART_GET_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:CART_GET_FAILURE})
    }
}

export const DeleteCartItem=(id,token)=>async(dispatch)=>{
    dispatch({type:CART_DELETE_REQUEST})
    try{
        await axios.delete(`https://ajio-backend-2fat.onrender.com/cart/delete/${id}`,{
            headers:{
                Authorization:token
            }
        })
        dispatch({type:CART_DELETE_SUCCESS})
    }catch(err){
        dispatch({type:CART_DELETE_FAILURE})
    }
}

export const UpdateCart=(id,obj,token)=>async(dispatch)=>{

    dispatch({type:CART_PATCH_REQUEST})
    try{
        const res=await axios.patch(`https://ajio-backend-2fat.onrender.com/cart/update/${id}`,obj,{
            headers:{
                Authorization:token
            }
        })
        console.log(res)
    }catch(err){
        dispatch({type:CART_PATCH_FAILURE})
    }
}