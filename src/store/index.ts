import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import middleware from '../configs/middleware'
// reducer
import authReducer, { authReducerActions } from './auth'
import counterReducer from './counter'
import todosReducer from './todos'

const composeEnhancers = composeWithDevTools({
	name: 'Readable',
	trace: true,
	traceLimit: 20,
})

const getMiddleware = () => {
	if (process.env.NODE_ENV === 'production') {
		return applyMiddleware(
			thunk,
			middleware.promiseMiddleware,
			middleware.localStorageMiddleware
		)
	}
	return applyMiddleware(
		thunk,
		middleware.promiseMiddleware,
		middleware.localStorageMiddleware,
		createLogger()
	)
}

const _rootReducer = combineReducers({
	auth: authReducer,
	counter: counterReducer,
	todos: todosReducer,
})

const reducer = (state: any, action: any) =>
	middleware.getReducer(_rootReducer, state, action)

const store = createStore(reducer, composeEnhancers(getMiddleware()))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store

export const reducerActions = {
	authReducerActions,
}
