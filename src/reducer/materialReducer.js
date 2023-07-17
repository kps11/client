import { 
    FETCH_MATERIAL_BEGIN,
    FETCH_MATERIAL_SUCCESS,
    FETCH_MATERIAL_FAILURE,
    ADD_MATERIAL_SUCCESS,
    ADD_MATERIAL_FAILURE,
    DELETE_MATERIAL_ITEM_SUCCESS,
    DELETE_MATERIAL_ITEM_FAILURE,

} from "../action/actionTypes";


const initialState = {
    materials: [], // array of material objects with id and name properties.
    loadingMaterials: false,  // boolean to indicate if the fetch is in progress or not.
    errorMessage: "",// any errors that occur during fetching process will be stored here for display

}


const materialReducer = (state = initialState , action) =>{
    switch( action.type ){
        case FETCH_MATERIAL_BEGIN:
            return {
                ...state,
                loadingMaterials : true
            }
        case FETCH_MATERIAL_SUCCESS:
            return {
                ...state,
                loadingMaterials:false,
                materials: [...action.payload]
            }
        case FETCH_MATERIAL_FAILURE:
            return {
                ...state,
                loadingMaterials: false,
                errorMessage: action.payload 
            }  
        case ADD_MATERIAL_SUCCESS:
            return {
                ...state,
                materials:[...state.materials,action.payload],
                loadingMaterials: false,
            }   
        case ADD_MATERIAL_FAILURE:
            return {
                ...state,
                errorMesage:"Error adding new Material"
            }
        case DELETE_MATERIAL_ITEM_SUCCESS:
            return {
                ...state,
                materials: state.materials.filter(material => material._id != action.payload._id)
            }
        case DELETE_MATERIAL_ITEM_FAILURE:
            return{
                ...state,
                errorMessage :  action.payload

            }        
        default:
            return {
                ...state
            }               
    }
} 

export default materialReducer;