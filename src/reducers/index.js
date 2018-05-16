import { combineReducers } from 'redux'

import AuthReducer from './AuthReducer'

const rootReducers = combineReducers({
  auth: AuthReducer
})

export default rootReducers