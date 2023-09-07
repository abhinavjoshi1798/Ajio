import { ADMINS_GET_FAILURE, ADMINS_GET_REQUEST, ADMINS_GET_SUCCESS, DASHBOARD_GET_FAILURE, DASHBOARD_GET_REQUEST, DASHBOARD_GET_SUCCESS, UPDATE_FAILURE, UPDATE_REQUEST, UPDATE_SUCCESS } from "./actionTypes"

const initialState={
    isLoading:false,
    isError:false,
    Totalorder:0,
    TotalUser:0,
    TotalAdmin:1,
    TotalProduct:0,
    Admins:[],
    Totaladm:0
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case DASHBOARD_GET_SUCCESS:
            return {...state,isLoading:false,Totalorder:payload.orders,TotalAdmin:payload.admins,TotalProduct:payload.products,TotalUser:payload.users}
        case DASHBOARD_GET_REQUEST:
            return {...state,isLoading:true}
        case DASHBOARD_GET_FAILURE:
            return {...state,isLoading:false,isError:true}
        case ADMINS_GET_REQUEST:
            return {...state,isLoading:true}
        case ADMINS_GET_SUCCESS:
            return {...state,isLoading:false,Admins:payload.admins,Totaladm:payload.Totaladm}
        case ADMINS_GET_FAILURE:
            return {...state,isLoading:false,isError:true}
        case UPDATE_REQUEST:
            return {...state,isLoading:true}
        case UPDATE_SUCCESS:
            return {...state,isLoading:false}
        case UPDATE_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }
}