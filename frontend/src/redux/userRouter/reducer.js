import { GETALL_USER_FAILURE, GETALL_USER_REQUEST, GETALL_USER_SUCCESS } from "./actionTypes"

const initialState={
    isLoading:false,
    isError:false,
    users:[],
    total:0
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GETALL_USER_REQUEST:
            return {...state,isLoading:true}
        case GETALL_USER_SUCCESS:
            return {...state,isLoading:false,users:payload.users,total:payload.total}
        case GETALL_USER_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }
}