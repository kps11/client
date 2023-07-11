import {
    FETCH_MENU_BEGIN,
    FETCH_MENU_SUCESS,
    FETCH_MENU_FAILURE,

    ADD_MENU_ITEM_SUCESS ,
    ADD_MENU_ITEM_FAILURE,

    UPDATE_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEM_FAILURE,

    DELETE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,

} from "../action/actionTypes"


const initialState ={
    menuList: [],
    menuListErrorMsg:"",
    menuLoader:false,
    sucessMessage:"",
    failureMessage:"",
} 


const menuReducer = ( state = initialState , action) =>{
    switch( action.type ){
        case FETCH_MENU_BEGIN:
            return {
                ...state,
                menuLoader: true
            }
        case FETCH_MENU_SUCESS:
            return {
                ...state,
                menuList: action.payload,
                menuLoader: false
            }
        case FETCH_MENU_FAILURE:
            return {
                ...state,
                menuListErrorMsg : "Error fetching Menu List!",
                menuLoader:false
            }
        case ADD_MENU_ITEM_SUCESS:
            return {
                ...state,
                menuList: [...state.menuList,action.payload],
                sucessMessage: "Menu added successfully",
                menuLoader:false
            } 
        case ADD_MENU_ITEM_FAILURE:
            return {
                ...state,
                failureMessage: "Failed to add new item!",
                menuLoader:false
            }
        case UPDATE_MENU_ITEM_SUCCESS:
            const menuList = state.menuList.map(item => {
                if(item._id === action.payload._id){
                    item = action.payload
                }
                return item;
            })
            console.log("reducer" , menuList )
            return {
                ...state,
                menuLoader:false,
                menuList: menuList,
                successMessage: "Item updated Successfully",
            }
        case UPDATE_MENU_ITEM_FAILURE:
            return {
                ...state,
                failureMessage: "Failed to update item , Please after some time",
                menuLoader:false
            }            
        case DELETE_MENU_ITEM_SUCCESS:
            return {
                ...state,
                menuLoader:false,
                menuList: state.menuList.filter(item => item._id != action.payload._id)

            } 
        case DELETE_MENU_ITEM_FAILURE:
            return {
                ...state,
                failureMessage: "Unable to delete Item , Please after somem time",
                menuLoader:false
            }       
        default:
            return state        
    }
}


export default menuReducer;