import api from "../utils/api"
import {
    FETCH_PARTNER_BEGIN,
    FETCH_PARTNER_SUCCESS,
    FETCH_PARTNER_FAILURE,

    ADD_PARTNER_SUCCESS,
    ADD_PARTNER_FAILURE,
} from "./actionTypes"


//fetch partner list
export const fetchPartner = () => async (dispatch) =>{
    try{
        dispatch({
            type: FETCH_PARTNER_BEGIN
        })
        const res = await api.get('/partner')
        dispatch({
            type: FETCH_PARTNER_SUCCESS,
            payload: res.data
        })
    }catch (err){
        dispatch({
            type: FETCH_PARTNER_FAILURE,
            payload: "Server Error ! Please try after some time"
        })
    }
}
//add partner
export const addPartner = (data) => async (dispatch)=>{
    try{
        dispatch({type:FETCH_PARTNER_BEGIN})
        const res = await api.post('/partner', data)
        dispatch({
            type: ADD_PARTNER_SUCCESS,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type:ADD_PARTNER_FAILURE,
            payload: "Server Error ! Please try after some time"
        })
    }
} 