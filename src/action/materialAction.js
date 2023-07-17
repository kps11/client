import api from "../utils/api"
import { 
    FETCH_MATERIAL_BEGIN,
    FETCH_MATERIAL_SUCCESS,
    FETCH_MATERIAL_FAILURE,

    ADD_MATERIAL_SUCCESS,
    ADD_MATERIAL_FAILURE,

    DELETE_MATERIAL_ITEM_SUCCESS,
    DELETE_MATERIAL_ITEM_FAILURE,
} from "./actionTypes"

export const fetchMaterialList =() => async( dispatch) =>{
    try{
        dispatch({
            type : FETCH_MATERIAL_BEGIN
        })
        const res = await api.get('/material')

        dispatch({
            type: FETCH_MATERIAL_SUCCESS,
            payload : res.data
        })
    }catch(err){
        dispatch({
            type : FETCH_MATERIAL_FAILURE,
            payload : "Error in fetching material List Please try after some time"
        })
    }
}

export const addMaterialToList = ( data ) => async (dispatch) =>{
    try{
        dispatch({
            type : FETCH_MATERIAL_BEGIN
        })
        const res = await api.post('/material',data)
        dispatch({
            type : ADD_MATERIAL_SUCCESS,
            payload : res.data
        })
    }catch(err){
        dispatch({
            type : ADD_MATERIAL_FAILURE,
            payload : "Failed to add material"
        })
    }
}



//delete material Item

export const deleteMaterialItem = ( id ) => async(dispatch) =>{
    try{
        dispatch({
            type : FETCH_MATERIAL_BEGIN
        })

        const res = await api.delete(`/material/delete/${id}`)
        dispatch({
            type : DELETE_MATERIAL_ITEM_SUCCESS,
            payload :  res.data
        })
    }catch (err) {
        dispatch({
            type : DELETE_MATERIAL_ITEM_FAILURE,
            err : "Failed to delete the item , Please try after sometime"
        })
    }
}