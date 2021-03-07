import React from 'react'
import Avatar from './Avatar'
import Logo from './Logo'
import ModeratorSidebarButton from './ModeratorSidebarButton'
import { UilEstate } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { UilBooks } from '@iconscout/react-unicons'
import { UilBookAlt } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

const ModeratorSidebar = () => {
	return (
		<div className='flex flex-col items-start pl-10 py-5'>
			<div className='flex justify-center mb-8'>
				<Logo fontSize='29px' colors={['#201f1e', '#201f1e', '#323130']} />
				<span className='flex items-center pl-2'>
					<label className='text-neutral-primary text-2x1 font-bold'>
						Read
					</label>
					<p className='font-bold text-2x1 text-neutral-quaternary'>able</p>
				</span>
			</div>
			<div className='flex flex-col mb-10'>
				<div>
					<Avatar className='w-ava h-ava' />
				</div>
				<div className='font-bold text-base'>catto</div>
			</div>
			<div>
				<Link to='/moderator/overview'>
					<ModeratorSidebarButton icon={<UilEstate />} text='Overview' />
				</Link>
				<Link to='/moderator/users'>
					<ModeratorSidebarButton icon={<UilUsersAlt />} text='Users' />
				</Link>
				<Link to='/moderator/genres'>
					<ModeratorSidebarButton icon={<UilBooks />} text='Genres' />
				</Link>
				<Link to='/moderator/books'>
					<ModeratorSidebarButton icon={<UilBookAlt />} text='Books' />
				</Link>
			</div>
		</div>
	)
}

export default ModeratorSidebar
