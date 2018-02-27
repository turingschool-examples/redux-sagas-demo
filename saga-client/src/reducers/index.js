import { combineReducers } from 'redux'
import authenticationReducer from './authenticationReducer'

const rootReducer = combineReducers({
  authentication: authenticationReducer,
})

export default rootReducer
