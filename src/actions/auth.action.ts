import constants from '../configs/constants'
import authService from '../services/auth.service'
const { MIDDLE_DISPATCH_ACTION_CONSTANTS } = constants

const register = (user: any) => {
	return (dispatch: any) => {
		return authService.register(user).then((res: any) => {
			dispatch({
				type: MIDDLE_DISPATCH_ACTION_CONSTANTS.REGISTER_SUCCESS,
				payload: res.data,
			})
			return res.data
		})
	}
}

const login = (user: any) => {
	return (dispatch: any) => {
		return authService.login(user).then((res: any) => {
			dispatch({
				type: MIDDLE_DISPATCH_ACTION_CONSTANTS.LOGIN_SUCCESS,
				payload: res.data,
			})
			return res.data
		})
	}
}

export default {
	register,
	login,
}
