import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { UilFacebookF, UilGoogle } from '@iconscout/react-unicons'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { authAction } from '../actions'
import Logo from './Logo'
import Input from './Input'
import Button from './Button'
import '../index.css'
import UnderlineTitle from './UnderlineTitle'

interface Props {
	title?: boolean
	login: any
}

const Login: React.FC<Props> = ({ title, login }) => {
	const history = useHistory()
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: Yup.object({
			username: Yup.string().trim().required('Username must not be empty'),
			password: Yup.string().required('Password must not be empty'),
		}),
		onSubmit: values => {
			login({
				email: values.username,
				password: values.password,
			}).then(() => {
				history.push('/')
			})
			// .catch((error: any) => {

			// });
		},
	})
	return (
		<div className='bg-white p-6 rounded-md'>
			{title ? (
				<div className='mb-5'>
					<UnderlineTitle
						name='Login'
						underline='top-12'
						className='text-4xl'
					/>
				</div>
			) : (
				<div className='flex justify-center pb-5'>
					<Logo fontSize='29px' colors={['#201f1e', '#201f1e', '#323130']} />
					<span className='flex items-center pl-2'>
						<label className='text-neutral-primary text-2x1 font-bold'>
							Read
						</label>
						<p className='font-bold text-2x1 text-neutral-quaternary'>able</p>
					</span>
				</div>
			)}

			<form onSubmit={formik.handleSubmit}>
				<Input
					type='text'
					label='Username'
					id='username'
					name='username'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.username}
				/>
				{formik.touched.username && formik.errors.username ? (
					<div className='text-error'>{formik.errors.username}</div>
				) : null}
				<Input
					type='password'
					label='Password'
					id='password'
					name='password'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className='text-error'>{formik.errors.password}</div>
				) : null}
			</form>
			<p className='my-1'>
				<a
					href=''
					className='text-neutral-primary visited:text-neutral-primary text-xs'>
					Forgot password?
				</a>
			</p>
			<p className='text-neutral-primary visited:text-neutral-primary my-1 text-xs'>
				Do not have an account yet? &nbsp;
				<a href='' className='underline'>
					Sign Up
				</a>
			</p>
			<Button
				onClick={formik.submitForm}
				text='Log in'
				className='w-full mt-2 bg-neutral-primary text-neutral-lighter-alt hover:text-neutral-primary'
				type='submit'
			/>
			<hr className='hr-text my-2' data-content='or' />
			<div className='flex'>
				<button className='ic px-3 py-sm rounded-md outline-none border-2 w-full bg-neutral-quaternary-alt mr-3 hover:cursor-pointer focus:outline-none'>
					<UilFacebookF size='16' />
				</button>
				<button className='ic px-3 py-sm rounded-md outline-none border-2 w-full bg-neutral-quaternary-alt ml-3 hover:cursor-pointer focus:outline-none'>
					<UilGoogle size='16' />
				</button>
			</div>
		</div>
	)
}

Login.defaultProps = {
	title: false,
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch: any) => ({
	login: (user: any) => dispatch(authAction.login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
