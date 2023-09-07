import { ORDER_GET_FAILURE, ORDER_GET_REQUEST, ORDER_GET_SUCCESS, ORDER_POST_FAILURE, ORDER_POST_REQUEST, ORDER_POST_SUCCESS } from "./actionTypes"

const initialState={
    isLoading:false,
    isError:false,
    orders:[],
    Totalorders:0
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ORDER_POST_REQUEST:
            return {...state,isLoading:true}
        case ORDER_POST_SUCCESS:
            return {...state,isLoading:false}
        case ORDER_POST_FAILURE:
            return {...state,isLoading:false,isError:true}
        case ORDER_GET_REQUEST:
            return {...state,isLoading:true}
        case ORDER_GET_SUCCESS:
            return {...state,isLoading:false,orders:payload.orders,Totalorders:payload.Totalorders}
        case ORDER_GET_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }
}