import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import authService from './services/auth.service'

interface Props {
	component: any
	auth?: boolean | undefined
	[restProps: string]: any
}

const AppRoute: React.FC<Props> = ({
	component: Component,
	auth,
	...restProps
}) => {
	return (
		<Route
			{...restProps}
			render={props =>
				!auth || (auth && authService.isAuthenticate()) ? (
					<Component {...props} />
				) : (
					<Redirect to='/login' />
				)
			}
		/>
	)
}

AppRoute.defaultProps = {
	auth: true,
}

export default AppRoute
