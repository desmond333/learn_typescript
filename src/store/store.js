import {createStore, combineReducers, applyMiddleware} from "redux"
import logger from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';

import tasksReducer from "./tasksReducer"

const reducers = combineReducers({ //смешиваем все reducer с помощью f combineReducers
    tasks: tasksReducer,
})

export const store = createStore(reducers, applyMiddleware(logger));