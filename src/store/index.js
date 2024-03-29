import { applyMiddleware , createStore} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';


import rootReducer from "../reducer"
import thunk from "redux-thunk";
import setAuthToken from "../utils/setAuthToken";

const intialState = {}
const middleWare = [thunk]
const store = createStore(rootReducer,intialState ,composeWithDevTools(   applyMiddleware(...middleWare)))


let currentState = store.getState()

store.subscribe(() =>{
    let previousState  = currentState;
    currentState = store.getState()
    if( previousState.auth.token != currentState.auth.token){
        const token  = currentState.auth.token;
        setAuthToken(token)
    }
})
export default store;



