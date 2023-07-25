import { combineReducers } from 'redux'

import authReducer from './authReducer'
import employeeReducer from "./employeeReducer"
import menuReducer from './menuReducer'
import materialReducer from './materialReducer'
import partnerReducer from './partnerReducer'

export default combineReducers({
    auth : authReducer,
    employee : employeeReducer,
    menu:menuReducer,
    material: materialReducer,
    partner: partnerReducer,
})

