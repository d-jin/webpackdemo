import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'

import header from "./header"

export default combineReducers({
  header,
  routerReducer
})