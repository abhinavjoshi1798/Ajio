import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionTypes"
import axios from "axios"



export const LoginAction=(userData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const res=await axios.post(`https://ajio-backend-2fat.onrender.com/user/login`,userData)
        if(res.data.status === 200){
            dispatch({type:LOGIN_SUCCESS,payload:res.data})
            return res.data.status
            
        }
        else{
            dispatch({type:LOGIN_FAILURE})
            return res.data.status
        }
    }
    catch(err){
        dispatch({type:LOGIN_FAILURE})
    }


}

export const LogoutAction=(dispatch)=>{
   return dispatch({type:LOGOUT})
}