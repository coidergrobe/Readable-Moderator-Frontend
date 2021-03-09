import ModeratorLayout from '../layouts/ModeratorLayout'
import SearchBox from '../components/SearchBox'
import { UilBell } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'
import { UilBooks } from '@iconscout/react-unicons'
import { UilPlusCircle } from '@iconscout/react-unicons'
import TotalData from '../components/TotalData'
import React, { useState, useEffect } from 'react'
import PaginationTable from '../components/PaginationTable'
import axios from 'axios'

const ModeratorBooks = () => {
	const [posts, setPosts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(5)

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
			setPosts(res.data)
		}

		fetchPosts()
	}, [])

	const [searchBoxValue, setSearchBoxValue] = useState<string>('')

	const handleSearchBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchBoxValue(e.target.value)
	}

	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
	const thead = ['ID', 'Name', 'Total books', '']

	const tbodyKey = ['id', 'title', 'body']

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
	const prevPage = (pageNumber: number) => setCurrentPage(pageNumber - 1)
	const nextPage = (pageNumber: number) => setCurrentPage(pageNumber + 1)
	return (
		<>
			<ModeratorLayout>
				<div className='p-7'>
					<div className='flex justify-between'>
						<div>
							<SearchBox
								placeholder='Search'
								value={searchBoxValue}
								onChange={handleSearchBoxChange}
								bgc='#FAF9F8'
							/>
						</div>
						<div className='flex'>
							<div className='cursor-pointer'>
								<UilBell />
							</div>
							<div className='ml-5 cursor-pointer'>
								<UilEllipsisV />
							</div>
						</div>
					</div>
					<div className='text-4xl font-bold my-10'>Books</div>
					<div className='grid grid-cols-4 gap-6 pb-6'>
						<TotalData
							icon={<UilBooks />}
							totalNumber='400'
							text='Total books'
						/>
					</div>
					<div className='box-border bg-white rounded-ttb'>
						<div className='p-7'>
							<div className='mb-10 flex justify-between items-center'>
								<div>
									<SearchBox
										placeholder='Search'
										value={searchBoxValue}
										onChange={handleSearchBoxChange}
										bgc='#fff'
									/>
								</div>
								<div className='text-primary cursor-pointer hover:text-dark-alt'>
									<UilPlusCircle size='40px' />
								</div>
							</div>
							<div>
								<PaginationTable
									thead={thead}
									tbodyKey={tbodyKey}
									tbodyData={currentPosts}
									text='Details'
									button
									postsPerPage={postsPerPage}
									totalPosts={posts.length}
									paginate={paginate}
									firstPage={paginate}
									lastPage={paginate}
									currentPage={currentPage}
									prevPage={prevPage}
									nextPage={nextPage}
								/>
							</div>
						</div>
					</div>
				</div>
			</ModeratorLayout>
		</>
	)
}

export default ModeratorBooks
