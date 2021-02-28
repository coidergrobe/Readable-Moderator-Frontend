import React from 'react'
import { connect } from 'react-redux'
import { UilFacebookF, UilGoogle } from '@iconscout/react-unicons'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { authAction } from '../actions'
import Logo from './Logo'
import Input from './Input'
import Button from './Button'
import UnderlineTitle from './UnderlineTitle'
import '../index.css'

interface Props {
	title?: boolean
	register: any
}

const Register: React.FC<Props> = ({ title, register }) => {
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			email: '',
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.trim()
				.required('Username must not be empty')
				.min(6, 'Username must be at least 6 characters long'),
			password: Yup.string()
				.required('Password must not be empty')
				.min(6, 'Password must be at least 6 characters'),
			email: Yup.string().trim().required('Email must not be empty'),
		}),
		onSubmit: values => {
			register({
				email: values.email,
				password: values.password,
				favoriteGenres: [0],
			})
		},
	})
	return (
		<div className='bg-white p-6 rounded-md'>
			{title ? (
				<div className='mb-5'>
					<UnderlineTitle
						name='Sign up'
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
				<Input
					type='email'
					label='Email'
					id='email'
					name='email'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className='text-error'>{formik.errors.email}</div>
				) : null}
			</form>
			<p className='text-neutral-primary visited:text-neutral-primary my-1 text-xs'>
				Already have an account? &nbsp;
				<a href='' className='underline'>
					Login
				</a>
			</p>
			<Button
				onClick={formik.submitForm}
				text='Sign up'
				className='w-full mt-2 bg-neutral-primary text-neutral-lighter-alt hover:text-neutral-primary'
				type='submit'
			/>
			<hr className='hr-text my-2' data-content='or' />
			<div className='flex'>
				<button className='ic px-3 py-sm rounded-md outline-none border-2 w-full bg-neutral-quaternary-alt mr-3 focus:outline-none '>
					<UilFacebookF size='16' />
				</button>
				<button className='ic px-3 py-sm rounded-md outline-none border-2 w-full bg-neutral-quaternary-alt ml-3 focus:outline-none '>
					<UilGoogle size='16' />
				</button>
			</div>
		</div>
	)
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch: any) => ({
	register: (user: any) => dispatch(authAction.register(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
