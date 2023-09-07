import { CART_DELETE_FAILURE, CART_DELETE_REQUEST, CART_DELETE_SUCCESS, CART_GET_REQUEST, CART_GET_SUCCESS, CART_POST_FAILURE, CART_POST_REQUEST, CART_POST_SUCCESS } from "./actionTypes"

const initialState={
    isLoading:false,
    isError:false,
    cartData:[],
    total:0,
    totalPrice:0
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case CART_POST_REQUEST:
            return {...state,isLoading:true}
        case CART_POST_SUCCESS:
            return {...state,isLoading:false}
        case CART_POST_FAILURE:
            return {...state,isLoading:false,isError:true}
        case CART_GET_REQUEST:
            return {...state,isLoading:true}
        case CART_GET_SUCCESS:
            return {...state,cartData:payload.products,total:payload.total,totalPrice:payload.totalPrice,isLoading:false}
        case CART_POST_FAILURE:
            return {...state,isLoading:false,isError:true}
        case CART_DELETE_REQUEST:
            return {...state,isLoading:true}
        case CART_DELETE_SUCCESS:
            return {...state,isLoading:false}
        case CART_DELETE_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }
}