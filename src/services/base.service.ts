import axios from 'axios'
import Cookies from 'js-cookie'

import { backendUrl } from '../configs'
import constants from '../configs/constants'

let token: string | undefined

const authToken = () => {
	if (!token) {
		token = Cookies.get(constants.COOKIE_KEY.AUTH_TOKEN) || ''
	}
	return `Bearer ${token}`
}

const _getPath = (url: string) => {
	if (url && (url.indexOf('http://') === 0 || url.indexOf('https://') === 0)) {
		return url
	}
	return `${backendUrl}${url}`
}

const responseData = (res: { data: any }) => res.data

const request = {
	get: (path: string, params = {}) =>
		axios({
			headers: {
				Authorization: authToken(),
			},
			method: 'GET',
			url: _getPath(path),
			params,
		}).then(responseData),
	post: (path: string, data?: any) =>
		axios({
			headers: {
				Authorization: authToken(),
			},
			method: 'POST',
			url: _getPath(path),
			data,
		}).then(responseData),
}

const setToken = (_token: string | undefined) => {
	token = _token
}
const getToken = () => {
	return token
}

export default {
	request,
	getToken,
	setToken,
}
