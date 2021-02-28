import Logo from './Logo'
import Container from './Container'
import Button from './Button'
import ActionButton from './ActionButton'
import Avatar from './Avatar'
import { UisSubject } from '@iconscout/react-unicons-solid'
import Sidebar from './Sidebar'

interface Props {
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const MainNavbar: React.FC<Props> = ({ onClick }) => {
	return (
		<div>
			<div className='w-full relative'>
				<Container size='xl' className='py-6'>
					<div className='flex justify-between'>
						<div className='flex items-center'>
							<Logo
								fontSize='29px'
								colors={['#201f1e', '#201f1e', '#323130']}
							/>
							<span className='flex items-center pl-2'>
								<label className='text-neutral-primary text-2x1 font-bold'>
									Read
								</label>
								<p className='font-bold text-2x1 text-neutral-quaternary'>
									able
								</p>
							</span>
						</div>
						<div className='flex items-center'>
							<ActionButton text='Charts' className='text-base' />
							<ActionButton text='Reading Lists' className='text-base' />
							<ActionButton text='Bookmarks' className='text-base' />
							<Button
								text='Upgrade'
								primary
								className='rounded-full ml-4 px-6 text-base'
							/>
							<Avatar className='ml-4' />
							<div className='ml-4 cursor-pointer' onClick={onClick}>
								<UisSubject size='30' />
							</div>
						</div>
					</div>
				</Container>

				<Sidebar className='absolute top-0 left-full w-sbp p-2 h-screen' />
			</div>
		</div>
	)
}

export default MainNavbar
