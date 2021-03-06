import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import authService from './services/auth.service'

interface Props {
	component?: any
	auth?: boolean | undefined
	[restProps: string]: any
	redirect?: string
}

const AppRoute: React.FC<Props> = ({
	component: Component,
	auth,
	redirect,
	...restProps
}) => {
	return (
		<Route
			{...restProps}
			render={props => {
				if (redirect) {
					return <Redirect to={redirect} />
				}
				if (!auth && authService.isAuthenticate()) {
					return <Redirect to='/moderator/overview' />
				} else {
					return !auth || (auth && authService.isAuthenticate()) ? (
						<Component {...props} />
					) : (
						<Redirect to='/login' />
					)
				}
			}}
		/>
	)
}

AppRoute.defaultProps = {
	auth: true,
}

export default AppRoute
