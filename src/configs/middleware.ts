import Cookie from 'js-cookie'
import _ from 'lodash'

import constants from './constants'
import baseService from '../services/base.service'

const { MIDDLE_DISPATCH_ACTION_CONSTANTS, COOKIE_KEY } = constants
const cookieAttrs = {
	path: '/',
	expires: 3650,
}

interface Action {
	type?: any
	payload?: any
	skipTracking?: any
	error?: any
}

const localStorageMiddleware = () => (next: any) => (action: Action) => {
	console.log(222222, next)

	switch (action.type) {
		case MIDDLE_DISPATCH_ACTION_CONSTANTS.REGISTER_SUCCESS:
		case MIDDLE_DISPATCH_ACTION_CONSTANTS.LOGIN_SUCCESS: {
			const token = _.get(action.payload, 'token')
			if (token) {
				Cookie.set(COOKIE_KEY.AUTH_TOKEN, token, cookieAttrs)
				baseService.setToken(token)
			}
			break
		}
		case MIDDLE_DISPATCH_ACTION_CONSTANTS.LOAD_USER_ERROR:
		case MIDDLE_DISPATCH_ACTION_CONSTANTS.LOGOUT: {
			baseService.setToken(undefined)
			Cookie.remove(COOKIE_KEY.AUTH_TOKEN, cookieAttrs)
			break
		}
		default:
			break
	}
	next(action)
}

function isPromise(v: any) {
	return v && typeof v.then === 'function'
}

const promiseMiddleware = (store: any) => (next: any) => (action: Action) => {
	if (isPromise(action.payload)) {
		store.dispatch({
			type: MIDDLE_DISPATCH_ACTION_CONSTANTS.ASYNC_START,
			subtype: action.type,
		})

		const currentView = store.getState().viewChangeCounter
		const skipTracking = action.skipTracking

		action.payload.then(
			(res: any) => {
				const currentState = store.getState()
				if (!skipTracking && currentState.viewChangeCounter !== currentView) {
					return
				}
				action.payload = res
				store.dispatch({
					type: MIDDLE_DISPATCH_ACTION_CONSTANTS.ASYNC_END,
					promise: action.payload,
				})
				store.dispatch(action)
			},
			(error: any) => {
				const currentState = store.getState()
				if (!skipTracking && currentState.viewChangeCounter !== currentView) {
					return
				}
				action.error = true
				action.payload = _.get(error, 'response.body')
				if (!action.skipTracking) {
					store.dispatch({
						type: MIDDLE_DISPATCH_ACTION_CONSTANTS.ASYNC_END,
						promise: action.payload,
					})
				}
				store.dispatch(action)
			}
		)
		return
	}
	next(action)
}

const getReducer = (rootReducer: any, state: any, action: any) => {
	switch (action.type) {
		case MIDDLE_DISPATCH_ACTION_CONSTANTS.LOGOUT:
			return rootReducer(undefined, action)
		default:
			return rootReducer(state, action)
	}
}

export default {
	localStorageMiddleware,
	promiseMiddleware,
	getReducer,
}
