import * as constant from '../../config/action'
import { createReducer } from './createReducer'

const initState = {
  title: '',
  back: false,
  home: false
}

export default createReducer(initState, {
  [constant.SET_HEADER]: (state, action) => {
    return {
      ...state,
      ...action.payload
  }
  }
})
