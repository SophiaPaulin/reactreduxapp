import { createStore, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
// import logger from 'redux-logger'
// import promise from "redux-promise";
import rootReducer from './reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk))