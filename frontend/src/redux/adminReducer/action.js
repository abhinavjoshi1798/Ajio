import axios from "axios"
import { ADMINS_GET_FAILURE, ADMINS_GET_REQUEST, ADMINS_GET_SUCCESS, DASHBOARD_GET_FAILURE, DASHBOARD_GET_REQUEST, DASHBOARD_GET_SUCCESS, UPDATE_FAILURE, UPDATE_REQUEST } from "./actionTypes"

export const Dashboarddata=()=>async(dispatch)=>{
    dispatch({type:DASHBOARD_GET_REQUEST})
    try{
        const res=await axios.get("https://ajio-backend-2fat.onrender.com/admin/dashboard")
        dispatch({type:DASHBOARD_GET_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:DASHBOARD_GET_FAILURE})
    }
}

export const getAdmins=(obj)=>async(dispatch)=>{
    dispatch({type:ADMINS_GET_REQUEST})
    console.log(obj)
    try{
        const res=await axios.get("https://ajio-backend-2fat.onrender.com/admin/getadmins",obj)
        console.log(res)
        dispatch({type:ADMINS_GET_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:ADMINS_GET_FAILURE})
    }
}


export const MakeEnable=(id,token)=>async(dispatch)=>{
    dispatch({type:UPDATE_REQUEST})
    try{
        const res=await axios.patch(`https://ajio-backend-2fat.onrender.com/admin/update/${id}`,{role:"admin"},{
            headers:{
                Authorization:token
            }
        })
        return {status:res.data.status}
    }catch(err){
        dispatch({type:UPDATE_FAILURE})
    }
}

export const MakeDisable=(id,token)=>async(dispatch)=>{
    dispatch({type:UPDATE_REQUEST})
    try{
        const res=await axios.patch(`https://ajio-backend-2fat.onrender.com/admin/update/${id}`,{role:"disable"},{
            headers:{
                Authorization:token
            }
        })
        console.log(res.data.err)
        return {status:res.data.status}
    }catch(err){
        dispatch({type:UPDATE_FAILURE})
    }
}