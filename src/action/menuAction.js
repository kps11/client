import { 
    FETCH_MENU_BEGIN, 
        FETCH_MENU_SUCESS ,
        FETCH_MENU_FAILURE ,
        ADD_MENU_ITEM_SUCESS ,
        ADD_MENU_ITEM_FAILURE,
        UPDATE_MENU_ITEM_SUCCESS,
        UPDATE_MENU_ITEM_FAILURE,
        UPDATE_EMPLOYEE_DETAILS_FAILURE,
        DELETE_MENU_ITEM_SUCCESS,
        DELETE_MENU_ITEM_FAILURE,
    } from "./actionTypes"
import api from "../utils/api"



export const fetchMenu = () => async(dispatch) =>{
    try{
        dispatch({
            type: FETCH_MENU_BEGIN
        })
        const res = await api.get("/menu")
         dispatch({
            type:FETCH_MENU_SUCESS,
            payload:res.data
        })
    }catch(err){
        dispatch({
            type: FETCH_MENU_FAILURE,
            payload : "Server Error"
        })
    }
    
}

export const addMenuItem = ( newItemData ) =>  async (dispatch) =>{
    try{
        dispatch({
            type: FETCH_MENU_BEGIN
        })
        const res = await api.post("/menu", newItemData)
        dispatch({
            type:ADD_MENU_ITEM_SUCESS,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: ADD_MENU_ITEM_FAILURE,
            payload:"Error adding menu item."
        })
    }
}


export const updateItem = (itemData, id) => async (dispatch) =>{
    try{
        dispatch({
            type: FETCH_MENU_BEGIN
        })
        const res = await api.put(`/menu/update/${id}`, itemData)
        dispatch({
            type:UPDATE_MENU_ITEM_SUCCESS,
            payload:res.data
        })
    }catch(err){
        dispatch({
            type: UPDATE_MENU_ITEM_FAILURE,
            payload: "Couldn't update item , Please try after some time"
        })
    }
}

export const deleteItem = (id ) => async (dispatch) =>{
    try{
        dispatch({
            type: FETCH_MENU_BEGIN
        })
        const res = await api.delete(`/menu/delete/${id}`)

        dispatch({
            type: DELETE_MENU_ITEM_SUCCESS,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: DELETE_MENU_ITEM_FAILURE,
            payload: "Error while getting deleted"
        })
    }
}