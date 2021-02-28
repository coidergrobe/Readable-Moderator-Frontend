import ActionButton from './ActionButton'
import Button from './Button'
import Container from './Container'
import Logo from './Logo'
import classnames from 'classnames'
import { useState } from 'react'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'

interface Props {
	className?: string
}

const SimpleNavbar: React.FC<Props> = ({ className }) => {
	// States
	const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)
	const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false)

	// Handle functions
	const handleLoginPopup = () => {
		setIsLoginModalOpen(true)
	}

	const handleRegisterPopup = () => {
		setIsRegisterModalOpen(true)
	}

	const login = <Login />
	const register = <Register />

	return (
		<nav className={classnames('simple-navbar-wrapper', className)}>
			<div className='simple-navbar-inner py-6 border-b border-lighter-alt'>
				<Container size='sm' className='flex justify-between'>
					<div className='logo-wrapper flex items-center'>
						<Logo fontSize='22px' colors={['#faf9f8', '#faf9f8', '#4dc5a3']} />
						<div className='logo-text pl-2 font-bold text-base text-lighter-alt'>
							Read<span className='text-neutral-tertiary-alt'>able</span>
						</div>
					</div>
					<div className='buttons-wrapper'>
						<ActionButton
							className='mr-4 text-neutral-light'
							text='log in'
							onClick={handleLoginPopup}
							primary
						/>
						<Button text='sign up' primary onClick={handleRegisterPopup} />
					</div>
				</Container>
			</div>
			{isLoginModalOpen && (
				<Modal onClick={() => setIsLoginModalOpen(false)}>{login}</Modal>
			)}
			{isRegisterModalOpen && (
				<Modal onClick={() => setIsRegisterModalOpen(false)}>{register}</Modal>
			)}
		</nav>
	)
}

export default SimpleNavbar
