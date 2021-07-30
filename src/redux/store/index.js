import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { todoReducer } from '../reducers/index'

const reducer = combineReducers({
  todoReducer,
})

const store = configureStore({
  reducer,
})

export default store
