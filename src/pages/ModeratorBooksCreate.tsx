import { useState } from 'react'
import ModeratorLayout from '../layouts/ModeratorLayout'
import SearchBox from '../components/SearchBox'
import Input from '../components/Input'
import HorizontalCategory from '../components/HorizontalCategory'
import { Scrollbars } from 'react-custom-scrollbars'

// Icons
import { UilBell } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'

// Formik
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../components/Button'
import FileInput from '../components/FileInput'
import axios from 'axios'

const ModeratorBooksCreate = () => {
	const [searchBoxValue, setSearchBoxValue] = useState<string>('')
	const [frontCover, setFrontCover] = useState<string | undefined>('')
	const [frontCoverFile, setFrontCoverFile] = useState('')
	const [uploadedFrontCover, setUploadedFrontCover] = useState('')
	const [backCover, setBackCover] = useState<string | undefined>('')
	const [backCoverFile, setBackCoverFile] = useState('')
	const [uploadedBackCover, setUploadedBackCover] = useState('')

	const url = 'http://168.63.247.4/v1'
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3d3dy5yZWFkYWJsZS5jZiIsImF1ZCI6Imh0dHBzOi8vd3d3LnJlYWRhYmxlLmNmIn0.8gWOkSBrFZ5vDPeNJChnCZQulCkrByso0tNp0wwidu8'

	const handleSearchBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchBoxValue(e.target.value)
	}

	const handleChangeFrontCover = (e: any) => {
		setFrontCover(URL.createObjectURL(e.target.files[0]))
		setFrontCoverFile(e.target.files[0])
	}

	const uploadFrontCover = () => {
		const file = frontCoverFile

		const formData = new FormData()

		formData.append('image', file)

		axios
			.post(`${url}/moderators/books/cover`, formData, {
				headers: {
					'content-type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(res => {
				setUploadedFrontCover(res.data)
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
	}

	const handleChangeBackCover = (e: any) => {
		setBackCover(URL.createObjectURL(e.target.files[0]))
		setBackCoverFile(e.target.files[0])
	}

	const uploadBackCover = () => {
		const file = backCoverFile

		const formData = new FormData()

		formData.append('image', file)

		axios
			.post(`${url}/moderators/books/cover`, formData, {
				headers: {
					'content-type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(res => {
				setUploadedBackCover(res.data)
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
	}

	const createBook = () => {
		axios
			.post(
				`${url}/moderators/books`,
				{
					name: formik.values.name,
					description: formik.values.description,
					frontCover: uploadedFrontCover,
					backCover: uploadedBackCover,
					genres: [1000, 1001],
					author: formik.values.author,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
	}

	const handleFormSubmit = (e: any) => {
		e.preventDefault()

		uploadFrontCover()

		uploadBackCover()

		createBook()
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			description: '',
			author: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().trim().required('Name must not be empty'),
			description: Yup.string().required('Description must not be empty'),
			author: Yup.string().trim().required('Author must not be empty'),
		}),
		onSubmit: values => {
			console.log(values)
		},
	})

	const scrollData = []

	for (let i = 0; i < 10; i++) {
		scrollData.push({
			id: `id${i}`,
			text: `text${i}`,
		})
	}

	return (
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
				<div className='text-4xl font-bold my-10'>Create Book</div>
				<div className='bg-white box-border p-5 rounded-ttb'>
					<div className='flex justify-evenly'>
						<div className='w-sbp h-full'>
							<form onSubmit={formik.handleSubmit}>
								<Input
									type='text'
									label='Name'
									id='name'
									name='name'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.name}
								/>
								{formik.touched.name && formik.errors.name ? (
									<div className='text-error'>{formik.errors.name}</div>
								) : null}
								<Input
									type='text'
									label='Description'
									id='description'
									name='description'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.description}
								/>
								{formik.touched.description && formik.errors.description ? (
									<div className='text-error'>{formik.errors.description}</div>
								) : null}
								<Input
									type='text'
									label='Author'
									id='author'
									name='author'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.author}
								/>
								{formik.touched.author && formik.errors.author ? (
									<div className='text-error'>{formik.errors.author}</div>
								) : null}
								<div className='mt-5'>
									<Scrollbars style={{ width: '100%', height: '50px' }}>
										<div className='flex gap-2 pt-2'>
											{scrollData.map(data => (
												<div key={data.id}>
													<HorizontalCategory id={data.id} text={data.text} />
												</div>
											))}
										</div>
									</Scrollbars>
								</div>
								<div className='flex justify-between items-center mt-5 gap-5'>
									<div className='w-full'>
										<FileInput
											text='Upload Front Cover'
											id='front-cover'
											onChange={handleChangeFrontCover}
										/>
									</div>
									<div className='w-full'>
										<FileInput
											text='Upload Back Cover'
											id='back-cover'
											onChange={handleChangeBackCover}
										/>
									</div>
								</div>
								<div className='mt-5 flex justify-end'>
									<Button text='Upload' onClick={handleFormSubmit} />
								</div>
							</form>
						</div>
						<div className='flex gap-5'>
							<div>
								<h1>Front Cover</h1>
								<div
									style={{ width: '200px', height: '300px' }}
									className='border border-black mt-5'>
									{frontCover != '' ? (
										<img
											src={frontCover}
											className='w-full h-full object-cover'
										/>
									) : (
										''
									)}
								</div>
							</div>
							<div>
								<h1>Back Cover</h1>
								<div
									style={{ width: '200px', height: '300px' }}
									className='border border-black mt-5'>
									{backCover != '' ? (
										<img
											src={backCover}
											className='w-full h-full object-cover'
										/>
									) : (
										''
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ModeratorLayout>
	)
}

export default ModeratorBooksCreate
