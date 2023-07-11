import { combineReducers } from 'redux'

import authReducer from './authReducer'
import employeeReducer from "./employeeReducer"
import menuReducer from './menuReducer'

export default combineReducers({
    auth : authReducer,
    employee : employeeReducer,
    menu:menuReducer
})

