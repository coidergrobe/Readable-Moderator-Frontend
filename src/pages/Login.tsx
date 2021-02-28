import styled from 'styled-components'
import BackgroundImage from '../assets/login-background.jpg'
import Logo from '../components/Logo'
import LoginComponent from '../components/Login'

const Login = () => {
	const LeftSideLogin = styled.div`
		background-image: linear-gradient(
				0deg,
				rgba(0, 0, 0, 0.1),
				rgba(0, 0, 0, 0.1)
			),
			url('${BackgroundImage}');

		background-size: cover;
	`
	return (
		<>
			<div className='fixed top-6 left-6'>
				<div className='flex justify-center'>
					<Logo fontSize='29px' colors={['#201f1e', '#201f1e', '#323130']} />
					<span className='flex items-center pl-2'>
						<label className='text-neutral-primary text-2x1 font-bold'>
							Read
						</label>
						<p className='font-bold text-2x1 text-neutral-quaternary'>able</p>
					</span>
				</div>
			</div>
			<div
				className='flex flex-row'
				style={{ width: '100vw', height: '100vh' }}>
				<LeftSideLogin className='w-60p'></LeftSideLogin>
				<div className='w-40p flex items-center justify-center'>
					<div className='w-86'>
						<LoginComponent title />
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
