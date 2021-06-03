import {createStore, combineReducers, applyMiddleware} from "redux"
import logger from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';

import tasksReducer from "./tasksReducer"

const rootReducer = combineReducers({ //смешиваем все reducer с помощью f combineReducers
    tasks: tasksReducer,
})
//для адекватной работы useSelector в компоненте
export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(logger));