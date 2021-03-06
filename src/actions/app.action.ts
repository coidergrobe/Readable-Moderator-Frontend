import constants from '../configs/constants'
import { reducerActions } from '../store'
import { authService } from '../services'
import baseService from '../services/base.service'
const { MIDDLE_DISPATCH_ACTION_CONSTANTS } = constants
const { authReducerActions } = reducerActions

const load = () => {
	return (dispatch: any) => {
		authService.init()
		const token = baseService.getToken()
		if (token) {
			authService
				.loadUser()
				.then((res: any) => {
					dispatch(authReducerActions.loadUser(res.data))
					return res
				})
				.catch(() => {
					dispatch({
						type: MIDDLE_DISPATCH_ACTION_CONSTANTS.LOGOUT,
					})
					return
				})
		}
		return
	}
}

export default {
	load,
}
