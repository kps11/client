import { 
    FETCH_EMPLOYEE_SUCESS ,
    FETCH_EMPLOYEE_FAILURE,
    FETCH_EMPLOYEE_DETAILS_SUCESS,
    FETCH_EMPLOYEE_DETAILS_FAILURE,
    UPDATE_EMPLOYEE_DETAILS_FAILURE,
    UPDATE_EMPLOYEE_DETAILS_SUCCESS } from "./actionTypes";
import api from "../utils/api"
import setAuthToken from "../utils/setAuthToken";


export const fetchEmployees = () => async (dispatch)=>{
    try{
        const res = await api.get("/employees")
        dispatch({
            type: FETCH_EMPLOYEE_SUCESS,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type : FETCH_EMPLOYEE_FAILURE,
            payload: "Server Error"
        })
    }
}


export const fetchEmployeeDetails = ( email ) => async (dispatch) =>{
    try{
        const res = await api.get(`/employees/profile/${email}`)
        dispatch({
            type: FETCH_EMPLOYEE_DETAILS_SUCESS,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: FETCH_EMPLOYEE_DETAILS_FAILURE,
            payload: "Server Error"
        })
    }
}

export const updateEmployeeDetails = (data) =>  async (dispatch) =>{
    try {
        const res = await api.put('/employees/profile/', data)
        dispatch({
            type: UPDATE_EMPLOYEE_DETAILS_SUCCESS,
            payload: res.data
        })

    }catch(err){
        dispatch({
            type: UPDATE_EMPLOYEE_DETAILS_FAILURE,
            payload: ""
        })
    }
}

