import React from 'react'
import Avatar from './Avatar'
import Logo from './Logo'
import ModeratorSidebarButton from './ModeratorSidebarButton'
import { UilEstate } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { UilBooks } from '@iconscout/react-unicons'
import { UilBookAlt } from '@iconscout/react-unicons'

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
				<ModeratorSidebarButton icon={<UilEstate />} text='Overview' />
				<ModeratorSidebarButton icon={<UilUsersAlt />} text='Users' />
				<ModeratorSidebarButton icon={<UilBooks />} text='Genres' />
				<ModeratorSidebarButton icon={<UilBookAlt />} text='Books' />
			</div>
		</div>
	)
}

export default ModeratorSidebar
