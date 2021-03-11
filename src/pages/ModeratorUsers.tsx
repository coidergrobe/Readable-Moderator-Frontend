import TotalData from '../components/TotalData'
import LineChart from '../components/LineChart'
import RadialChart from '../components/RadialChart'
import React, { useState, useEffect } from 'react'
import SearchBox from '../components/SearchBox'
import ModeratorLayout from '../layouts/ModeratorLayout'
import { UilBell } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import PaginationTable from '../components/PaginationTable'
import axios from 'axios'

const ModeratorUsers = () => {
	const [searchBoxValue, setSearchBoxValue] = useState<string>('')
	const [posts, setPosts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(5)
	const [totalUsers, setTotalUsers] = useState(0)

	const url = 'http://168.63.247.4/v1'
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3d3dy5yZWFkYWJsZS5jZiIsImF1ZCI6Imh0dHBzOi8vd3d3LnJlYWRhYmxlLmNmIn0.8gWOkSBrFZ5vDPeNJChnCZQulCkrByso0tNp0wwidu8'

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
			setPosts(res.data)
		}

		fetchPosts()
	}, [])

	useEffect(() => {
		const fetchTotalUsers = async () => {
			const res = await axios.get(`${url}/moderators/User/CountUser`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			setTotalUsers(res.data.data.total)
		}

		fetchTotalUsers()
	}, [])

	const handleSearchBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchBoxValue(e.target.value)
	}

	// Chart data
	const categories = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

	const data = [250, 70, 300, 40, 350, 10, 400]

	const series = [50]

	// Table data
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
	const thead = ['ID', 'Username', 'Email', '']

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
					<div className='text-4xl font-bold my-10'>Users</div>
					<div className='grid grid-cols-4 gap-6 pb-6'>
						<TotalData
							icon={<UilUser />}
							totalNumber={totalUsers}
							text='Total users'
						/>
						<TotalData
							icon={<UilUser />}
							totalNumber='4'
							text='Total premium'
						/>
					</div>
					<div className='flex gap-6 mb-6'>
						<div
							className='bg-white box-border rounded-ttb p-10'
							style={{ width: '250px', height: '250px' }}>
							<RadialChart
								series={series}
								height='250px'
								fontSize='15px'
								dataSize='15px'
							/>
						</div>
						<div className='flex-grow bg-white rounded-ttb box-border p-10'>
							<LineChart
								categories={categories}
								data={data}
								dataName='users'
								textTitle='Weekly new users'
								height='250px'
							/>
						</div>
					</div>
					<div className='box-border bg-white rounded-ttb'>
						<div className='p-7'>
							<div className='mb-10'>
								<SearchBox
									placeholder='Search'
									value={searchBoxValue}
									onChange={handleSearchBoxChange}
									bgc='#fff'
								/>
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

export default ModeratorUsers
