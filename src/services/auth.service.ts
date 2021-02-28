import Cookie from 'js-cookie'
import baseService from './base.service'

function _getToken() {
	return Cookie.get('authToken')
}

const init = () => {
	const token = _getToken()
	if (token) {
		baseService.setToken(token)
	}
}

const isAuthenticate = () => {
	return !!_getToken()
}

const register = (user: any) => {
	return baseService.request.post('/v1/users/Auth/register', user)
}

const login = (user: any) => {
	return baseService.request.post('/v1/users/Auth/login', user)
}

const loadUser = (token: string) => {
	return Promise.resolve()
}

export default {
	init,
	isAuthenticate,
	baseService,
	register,
	login,
	getToken: baseService.getToken(),
	loadUser,
}
