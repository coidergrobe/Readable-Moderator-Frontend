// Import libraries
import { lazy, Suspense, useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import _ from 'lodash'

import AppRoute from './AppRoute'
import { appAction } from './actions'
// Import pages lazily to reduce bundle size
const About = lazy(() => import('./pages/About'))
const HelloWorld = lazy(() => import('./pages/HelloWorld'))
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Overview = lazy(() => import('./pages/Overview'))
const ModeratorUsers = lazy(() => import('./pages/ModeratorUsers'))
const ModeratorGenres = lazy(() => import('./pages/ModeratorGenres'))
const ModeratorBooks = lazy(() => import('./pages/ModeratorBooks'))

const routes = [
	{
		path: '/about',
		component: About,
		extract: true,
	},
	{
		path: '/hello-world',
		component: HelloWorld,
		extract: true,
	},
	{
		path: '/login',
		component: Login,
		extract: true,
		auth: false,
	},
	{
		path: '/register',
		component: Register,
		extract: true,
		auth: false,
	},
	{
		path: '/moderator/overview',
		component: Overview,
		extract: true,
	},
	{
		path: '/moderator/users',
		component: ModeratorUsers,
		extract: true,
	},
	{
		path: '/moderator/genres',
		component: ModeratorGenres,
		extract: true,
	},
	{
		path: '/moderator/books',
		component: ModeratorBooks,
		extract: true,
	},
	{
		path: '/',
		component: Home,
		extract: true,
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
