import { combineReducers } from 'redux'

import countriesReducer from './countries'
import uiReducer from './ui'

const createRootReducer = () =>
  combineReducers({
    countries: countriesReducer,
    ui: uiReducer
  })

export default createRootReducer
