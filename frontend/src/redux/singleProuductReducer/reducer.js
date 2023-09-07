import { SINGLE_PRODUCT_GET_FAILURE, SINGLE_PRODUCT_GET_REQUEST, SINGLE_PRODUCT_GET_SUCCESS } from "./actionTypes"

const initialState={
    isLoading:false,
    isError:false,
    product:{}
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case SINGLE_PRODUCT_GET_REQUEST:
            return {...state,isLoading:true}
        case SINGLE_PRODUCT_GET_SUCCESS:
            return {...state,isLoading:false,product:payload}
        case SINGLE_PRODUCT_GET_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }
}