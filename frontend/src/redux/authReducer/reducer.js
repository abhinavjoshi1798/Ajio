import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from "./actionTypes"

const initialState={
    isLoading:false,
    isError:false,
    isAuth:sessionStorage.getItem("isAuth") || false,
    token:sessionStorage.getItem("token") || "",
    role:sessionStorage.getItem("role") || "",
    first_name: sessionStorage.getItem("first_name") || "",
    last_name:sessionStorage.getItem("last_name") || "",
    email:sessionStorage.getItem("email") || "",
    userId:sessionStorage.getItem("userid") || ""
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return {...state,isLoading:true}
        case LOGIN_SUCCESS:
            sessionStorage.setItem("isAuth",true)
            sessionStorage.setItem("first_name",payload.first_name)
            sessionStorage.setItem("last_name",payload.last_name)
            sessionStorage.setItem("email",payload.email)
            sessionStorage.setItem("role",payload.role)
            sessionStorage.setItem("token",payload.token)
            sessionStorage.setItem("userid",payload.userId)
            return {...state,isLoading:false,isAuth:true,token:payload.token,first_name:payload.first_name,last_name:payload.last_name,email:payload.last_name,role:payload.last_name,userId:payload.userId}
        case LOGIN_FAILURE:
            return {...state,isLoading:false,isError:true}
        case LOGOUT:
            sessionStorage.setItem("isAuth",false)
            sessionStorage.setItem("first_name","")
            sessionStorage.setItem("last_name","")
            sessionStorage.setItem("email","")
            sessionStorage.setItem("role","")
            sessionStorage.setItem("token","")
            return {...state,isAuth:false,token:"",first_name:"",last_name:"",email:"",role:""}
        default:
            return state
    }
}