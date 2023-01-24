import { 
    FETCH_EMPLOYEE_SUCESS,
    FETCH_EMPLOYEE_FAILURE,
    FETCH_EMPLOYEE_DETAILS_FAILURE,
    FETCH_EMPLOYEE_DETAILS_SUCESS,
    UPDATE_EMPLOYEE_DETAILS_FAILURE,
    UPDATE_EMPLOYEE_DETAILS_SUCCESS
} from "../action/actionTypes";

const initialState = {
    employees: [],
    loader:false,
    error : "",
    employeeDetails:{},
    updateEmployeeDetails: false,
    updateEmployeeDetailsError: ""
}

const employeeReducer = ( state = initialState, action ) =>{
    switch(action.type){
        case FETCH_EMPLOYEE_SUCESS:
            return {
                ...state,
                employees : action.payload,
                loader: false
            }
        case FETCH_EMPLOYEE_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case FETCH_EMPLOYEE_DETAILS_SUCESS:
            return{
                ...state,
                employeeDetails: action.payload
            }
        case FETCH_EMPLOYEE_DETAILS_FAILURE:
            return{
                ...state,
                error: action.payload
            }    
        case UPDATE_EMPLOYEE_DETAILS_SUCCESS:
            return{
                ...state,
                updateEmployeeDetails:true
            }
        case UPDATE_EMPLOYEE_DETAILS_FAILURE:
            return{
                ...state,
                updateEmployeeDetailsError: action.payload
            }                
        default :
            return state
    }
}

export default employeeReducer