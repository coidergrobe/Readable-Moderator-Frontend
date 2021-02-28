import { UilTopArrowToTop } from '@iconscout/react-unicons'
import { UilArrowToRight } from '@iconscout/react-unicons'
import SearchBox from './SearchBox'
import React, { useState } from 'react'
import Category from './Category'
import UnderlineTitle from './UnderlineTitle'
import Button from './Button'
import { Scrollbars } from 'react-custom-scrollbars'

const SlideSidebar = () => {
	const [searchBoxValue, setSearchBoxValue] = useState<string>('')

	const handleSearchBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchBoxValue(e.target.value)
	}

	return (
		<>
			<div className='mt-4'>
				<UilTopArrowToTop size='40' />
			</div>
			<div className='my-6'>
				<h1 className='text-title font-bold'>Find books you love.</h1>
			</div>
			<div>
				<SearchBox
					placeholder='Book name, artist ...'
					bgc='f5f5f5'
					value={searchBoxValue}
					onChange={handleSearchBoxChange}
				/>
			</div>
			<div>
				<UnderlineTitle name='Categories' />
			</div>
			<div style={{ height: '50%' }}>
				<Scrollbars style={{ width: '100%', height: '100%' }}>
					<div className='grid grid-cols-3 gap-4'>
						<Category
							id='Thriller'
							name='Thriller'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller1'
							name='Thriller1'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller2'
							name='Thriller2'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller3'
							name='Thriller3'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller4'
							name='Thriller4'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller5'
							name='Thriller5'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller6'
							name='Thriller6'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller7'
							name='Thriller7'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller8'
							name='Thriller8'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller9'
							name='Thriller9'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller10'
							name='Thriller10'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller11'
							name='Thriller11'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
						<Category
							id='Thriller12'
							name='Thriller12'
							src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
						/>
					</div>
				</Scrollbars>
			</div>
			<div className='flex justify-between mt-5'>
				<UilArrowToRight size='40' />
				<Button
					className='bg-neutral-primary-alt text-lighter-alt px-12 py-2 hover:text-black'
					text='Search'
				/>
			</div>
		</>
	)
}

export default SlideSidebar
