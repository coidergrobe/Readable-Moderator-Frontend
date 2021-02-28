import Button from './Button'
import Logo from './Logo'
import Persona, { PersonaSize } from './Persona'
import { UilSubject } from '@iconscout/react-unicons'
import Flip from './Flip'

const Navbar = () => {
	return (
		<nav className='navbar-wrapper sticky w-full'>
			<div className='navbar-inner p-5 flex justify-between'>
				<div className='logo-wrapper flex items-center'>
					<Logo fontSize='22px' colors={['#323130', '#323130', '#323130']} />
					<div className='logo-text font-bold text-base pl-2 text-neutral-primary'>
						Read<span className='text-neutral-tertiary-alt'>able</span>
					</div>
				</div>
				<div className='flex items-center actions-wrapper text-sm font-semibold text-neutral-primary'>
					<a href='#' className='mr-5'>
						Charts
					</a>
					<a href='#' className='mr-5'>
						Reading Lists
					</a>
					<a href='#' className='mr-5'>
						Bookmarks
					</a>
					<Button
						text='Upgrade'
						primary
						className='rounded-full px-4 py-md mr-5'
					/>
					<Persona className='mr-5' showInfo={false} size={PersonaSize.sm} />
					<Flip>
						<UilSubject size='22' />
					</Flip>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
