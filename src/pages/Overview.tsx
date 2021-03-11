import SearchBox from '../components/SearchBox'
import ModeratorLayout from '../layouts/ModeratorLayout'
import { UilBell } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'
import { UilUser } from '@iconscout/react-unicons'
import { UilBookReader } from '@iconscout/react-unicons'
import { UilBooks } from '@iconscout/react-unicons'
import { UilBookAlt } from '@iconscout/react-unicons'
import TotalData from '../components/TotalData'
import LineChart from '../components/LineChart'
import DetailsCard from '../components/DetailsCard'
import RadialChart from '../components/RadialChart'
import axios from 'axios'

const Overview = () => {
	const [value, setValue] = useState<string>('')
	const [totalUsers, setTotalUsers] = useState(0)

	const handleSearchBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const url = 'http://168.63.247.4/v1'
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3d3dy5yZWFkYWJsZS5jZiIsImF1ZCI6Imh0dHBzOi8vd3d3LnJlYWRhYmxlLmNmIn0.8gWOkSBrFZ5vDPeNJChnCZQulCkrByso0tNp0wwidu8'

	useEffect(() => {
		const fetchTotalUsers = async () => {
			const res = await axios.get(`${url}/moderators/User/CountUser`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			setTotalUsers(res.data.data.total)
		}

		fetchTotalUsers()
	}, [])

	const categories = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

	const data = [250, 70, 300, 40, 350, 10, 400]

	const series = [50]

	return (
		<>
			<ModeratorLayout>
				<div className='p-7'>
					<div className='flex justify-between'>
						<div>
							<SearchBox
								placeholder='Search'
								value={value}
								onChange={handleSearchBoxChange}
								bgc='f5f5f5'
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
					<div className='text-4xl font-bold my-10'>Overview</div>
					<div className='grid grid-cols-4 gap-6 pb-6'>
						<TotalData
							icon={<UilUser />}
							totalNumber={totalUsers}
							text='Total users'
						/>
						<TotalData
							icon={<UilBookReader />}
							totalNumber='400'
							text='Total views'
						/>
						<TotalData
							icon={<UilBooks />}
							totalNumber='400'
							text='Total genres'
						/>
						<TotalData
							icon={<UilBookAlt />}
							totalNumber='400'
							text='Total books'
						/>
					</div>
					<div className='flex gap-6 mb-6'>
						<div>
							<DetailsCard />
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
					<div className='flex gap-6'>
						<div className='flex-grow bg-white rounded-ttb box-border p-10'>
							<LineChart
								categories={categories}
								data={data}
								dataName='revenue'
								textTitle='Weekly revenue'
								height='250px'
							/>
						</div>
						<div
							className='bg-white p-10 rounded-ttb flex items-center justify-center'
							style={{ width: '350px' }}>
							<RadialChart
								series={series}
								height='350px'
								fontSize='25px'
								dataSize='25px'
							/>
						</div>
					</div>
				</div>
			</ModeratorLayout>
		</>
	)
}

export default Overview
