import { LOGIN_SUCESS, LOGIN_FAILURE , SIGNUP_SUCESS ,SIGNUP_FAILURE, USER_LOADED} from "./actionTypes"
import api from "../utils/api"
import setAuthToken from "../utils/setAuthToken";


 export const loadUser = () => async (dispatch) =>{
    try{
        const res = await api.get('/auth');
        dispatch({
            type :USER_LOADED,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type : LOGIN_FAILURE
        })
    }
} 

export const login = (email,password) => async (dispatch) => {
    const body = {
        email,
        password
    }

    try {
        const res = await api.post('/auth', body)
        dispatch({
            type:LOGIN_SUCESS,
            payload: res.data
        })
        setAuthToken(res.data.token)
        dispatch(loadUser())
    }catch{
        dispatch({
            type: LOGIN_FAILURE,
            payload:{
                loggedIn :false
            }
        })
    }
}

export const signup = (formData) => async (dispatch) =>{
    try{
        const res = await api.post('/user', formData)

        dispatch({
            type : SIGNUP_SUCESS,
            payload: res.data
        })

    }catch(err){
        const errors  = err.response.data.errors;

        // if( errors) {
        //     errors.forEach((error) => dispatch(setAlert(error.msg , 'danger')))
        // }
        dispatch({
            type:SIGNUP_FAILURE,
        })
    }
}