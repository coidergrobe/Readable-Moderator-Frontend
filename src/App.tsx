// Import libraries
import { lazy, Suspense, useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import _ from 'lodash'

import AppRoute from './AppRoute'
import { appAction } from './actions'
// Import pages lazily to reduce bundle size
const Login = lazy(() => import('./pages/Login'))
const Overview = lazy(() => import('./pages/Overview'))
const ModeratorUsers = lazy(() => import('./pages/ModeratorUsers'))
const ModeratorGenres = lazy(() => import('./pages/ModeratorGenres'))
const ModeratorBooks = lazy(() => import('./pages/ModeratorBooks'))
const ModeratorBooksCreate = lazy(() => import('./pages/ModeratorBooksCreate'))

const routes = [
	{
		path: '/login',
		component: Login,
		exact: true,
		auth: false,
	},
	{
		path: '/moderator/overview',
		component: Overview,
		exact: true,
	},
	{
		path: '/moderator/users',
		component: ModeratorUsers,
		exact: true,
	},
	{
		path: '/moderator/genres',
		component: ModeratorGenres,
		exact: true,
	},
	{
		path: '/moderator/books',
		component: ModeratorBooks,
		exact: true,
	},
	{
		path: '/moderator/books/create',
		component: ModeratorBooksCreate,
		exact: true,
	},
	{
		path: '/',
		redirect: '/moderator/overview',
	},
]

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(appAction.load())
	}, [])

	return (
		<>
			<Suspense fallback={<div>Loading ....</div>}>
				<Switch>
					{_.map(routes, (route, index) => {
						return <AppRoute key={index} {...route} />
					})}
				</Switch>
			</Suspense>
		</>
	)
}

export default App
