import {
    FETCH_PARTNER_BEGIN,
    FETCH_PARTNER_SUCCESS,
    FETCH_PARTNER_FAILURE,
    ADD_PARTNER_SUCCESS,
    ADD_PARTNER_FAILURE,
    DELETE_PARTNER_SUCCESS,
    DELETE_PARTNER_FAILURE,
} from "../action/actionTypes"


const intitialState = {
    partners: [],
    loading: false,
    errorMesage: "",
}

const partnerReducer = ( state = intitialState , action) => {
    switch(action.type){
        case FETCH_PARTNER_BEGIN:
            return {
                ...state,
                loading : true
            }
        case FETCH_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                partners: [...action.payload]
            }
        case FETCH_PARTNER_FAILURE:
            return {
                ...state,
                loading:false,
                errorMesage: action.payload
            }        
        case ADD_PARTNER_SUCCESS :
            return {
                ...state,
                partners:[...state.partners,action.payload],
                loading:false
            }   
        case ADD_PARTNER_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
            } 
        case DELETE_PARTNER_SUCCESS:
            return {
                ...state,
                loading:false,
                partners: state.partners.filter(item => item._id != action.payload._id)
            }
        case DELETE_PARTNER_FAILURE:
            return {
                ...state,
                loading:false,
                errorMessage: action.payload
            }        
        default:
            return {
                ...state
            }        

    }
}

export default partnerReducer;