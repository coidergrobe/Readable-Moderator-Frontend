import { authService } from '../services'
import baseService from '../services/base.service'

const load = () => {
	return (dispatch: any) => {
		authService.init()
		const token = baseService.getToken()

		if (token) {
			authService.loadUser(token)
			// .then((res: any) => {

			// });
		}
		return
	}
}

export default {
	load,
}
