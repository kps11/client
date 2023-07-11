import { LOGIN_SUCESS , LOGIN_FAILURE , SIGNUP_FAILURE , SIGNUP_SUCESS ,USER_LOADED, LOGOUT_USER} from "../action/actionTypes";

const initalState ={
    isAuthenticated:false,
    token:localStorage.getItem('token'),
    isLoading:false,
    userDetails:{},
    error:{}
    
}



const authReducer = ( state = initalState ,action) => {
    switch ( action.type ){
        case USER_LOADED:
            return {
                ...state,
                isLoading:false,
                userDetails:action.payload
            }
        case LOGIN_SUCESS:
            return {
                ...state,
                isLoading:false,
                isAuthenticated:true
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                isAuthenticated: false,
                error:action.payload,
                isLoading:false
            }
        case SIGNUP_SUCESS:
            return{
                ...state,
                isAuthenticated:true,
                userDetails:action.payload,
                isLoading:false
            } 
        case SIGNUP_FAILURE:
            return{
                ...state,
                isAuthenticated:false,
                isLoading:false,
                error:action.payload
            } 
        case LOGOUT_USER:
            return{
                isAuthenticated:false,
                isLoading:false,
                userDetails:{},
                error:{},
                token:localStorage.removeItem('token')
            }          
         default:
             return state   
    }

}

export default authReducer

