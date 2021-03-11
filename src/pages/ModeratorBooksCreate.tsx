import { useState, useEffect } from 'react'
import ModeratorLayout from '../layouts/ModeratorLayout'
import SearchBox from '../components/SearchBox'
import Input from '../components/Input'
import HorizontalCategory from '../components/HorizontalCategory'
import { Scrollbars } from 'react-custom-scrollbars'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

// Icons
import { UilBell } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'

// Formik
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../components/Button'
import axios from 'axios'

// pdf configs
const options = {
	cMapUrl: 'cmaps/',
	cMapPacked: true,
}

const ModeratorBooksCreate = () => {
	const [searchBoxValue, setSearchBoxValue] = useState<string>('')
	const [frontCover, setFrontCover] = useState('')
	const [frontCoverFile, setFrontCoverFile] = useState('')
	const [uploadedFrontCover, setUploadedFrontCover] = useState('')
	const [backCover, setBackCover] = useState<string | undefined>('')
	const [backCoverFile, setBackCoverFile] = useState<any>('')
	const [uploadedBackCover, setUploadedBackCover] = useState('')
	const [allGenres, setAllGenres] = useState<any[]>([])
	const [checkedGenres, setCheckedGenres] = useState<number[]>([])
	const [bookId, setBookId] = useState(0)
	const [pdfFile, setPDFFile] = useState('')

	const url = 'http://168.63.247.4/v1'
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3d3dy5yZWFkYWJsZS5jZiIsImF1ZCI6Imh0dHBzOi8vd3d3LnJlYWRhYmxlLmNmIn0.8gWOkSBrFZ5vDPeNJChnCZQulCkrByso0tNp0wwidu8'

	useEffect(() => {
		const getAllGenres = async () => {
			const res = await axios.get(`${url}/moderators/Genres`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			setAllGenres(res.data.data)
			console.log(res.data.data)
		}
		getAllGenres()
	}, [])

	const handleSearchBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchBoxValue(e.target.value)
	}

	const handleChangeFrontCover = (e: any) => {
		const file = e.target.files[0]
		setFrontCover(URL.createObjectURL(file))
		setFrontCoverFile(file)
	}

	const uploadFrontCover = () => {
		const formData = new FormData()

		formData.append('image', frontCoverFile)

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
				console.log(err.response)
			})
	}

	const handleChangeBackCover = (e: any) => {
		setBackCover(URL.createObjectURL(e.target.files[0]))
		setBackCoverFile(e.target.files[0])
	}

	const uploadBackCover = () => {
		const formData = new FormData()

		formData.append('image', backCoverFile)

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
				console.log(err.response)
			})
	}

	const handleUploadImage = (e: any) => {
		e.preventDefault()

		uploadFrontCover()

		uploadBackCover()
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
					genres: checkedGenres,
					author: formik.values.author,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then(res => {
				setBookId(res.data.data.id)
				console.log(res.data.data.id)
			})
			.catch(err => {
				console.log(err.response)
			})
	}

	const handleCheckBoxChange = (e: any) => {
		if (e.target.checked === false) {
			const index = checkedGenres.indexOf(Number(e.target.id))
			if (index > -1) {
				checkedGenres.splice(index, 1)
				console.log('checked: ', checkedGenres)
			}
		} else {
			setCheckedGenres([...checkedGenres, Number(e.target.id)])
			console.log(checkedGenres)
		}
	}

	const handleFormSubmit = (e: any) => {
		e.preventDefault()

		createBook()
	}

	const handleChangePdfFile = (e: any) => {
		setPDFFile(e.target.files[0])
	}

	const handleAddPage = () => {
		const formData = new FormData()

		formData.append('content', pdfFile)

		axios
			.post(`${url}/moderators/books/${bookId}/pages`, formData, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
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
				<div className='text-4xl font-bold my-10'>Create Book Information</div>
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
								<div className='mt-3'>
									<Scrollbars style={{ width: '100%', height: '60px' }}>
										<div className='flex gap-2'>
											{allGenres.map(genre => (
												<div key={genre.id} className='mt-4'>
													<HorizontalCategory
														id={genre.id}
														text={genre.name}
														onChange={handleCheckBoxChange}
													/>
												</div>
											))}
										</div>
									</Scrollbars>
								</div>
								<div className='mt-5 flex justify-between'>
									<div>
										<span
											className='font-bold text-xs px-3 py-sm rounded-md outline-none border-2 focus:bg-neutral-light focus:outline-none cursor-pointer border-neutral-dark'
											onClick={handleUploadImage}>
											Upload Image
										</span>
									</div>
									<div>
										<span
											className='font-bold text-xs px-3 py-sm rounded-md outline-none border-2 focus:bg-neutral-light focus:outline-none cursor-pointer border-neutral-dark'
											onClick={handleFormSubmit}>
											Create
										</span>
									</div>
								</div>
							</form>
							<input
								type='file'
								id='front-cover'
								hidden
								onChange={handleChangeFrontCover}
							/>
							<input
								type='file'
								id='back-cover'
								hidden
								onChange={handleChangeBackCover}
							/>
						</div>
						<div className='flex gap-5'>
							<div>
								<div
									style={{ width: '200px', height: '300px' }}
									className='border border-black mt-5'>
									{frontCover != '' ? (
										<img
											src={frontCover}
											className='w-full h-full object-cover cursor-pointer'
											onClick={() => {
												setFrontCover('')
											}}
										/>
									) : (
										<label htmlFor='front-cover'>
											<div className='w-full h-full bg-neutral-light flex justify-center items-center cursor-pointer'>
												Select front cover
											</div>
										</label>
									)}
								</div>
							</div>
							<div>
								<div
									style={{ width: '200px', height: '300px' }}
									className='border border-black mt-5'>
									{backCover != '' ? (
										<img
											src={backCover}
											className='w-full h-full object-cover cursor-pointer'
											onClick={() => {
												setBackCover('')
											}}
										/>
									) : (
										<label htmlFor='back-cover'>
											<div className='w-full h-full bg-neutral-light flex justify-center items-center cursor-pointer'>
												Select back cover
											</div>
										</label>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='text-4xl font-bold my-10'>Add Pages</div>

				<div className='bg-white box-border p-5 rounded-ttb'>
					<div className='flex justify-center gap-5'>
						<input
							type='file'
							id='pdf-file'
							hidden
							onChange={handleChangePdfFile}
						/>
						<label htmlFor='pdf-file'>
							<div>
								<span className='font-bold text-xs px-3 py-sm rounded-md outline-none border-2 focus:bg-neutral-light focus:outline-none cursor-pointer border-neutral-dark'>
									Select Page
								</span>
							</div>
						</label>
						<div>
							<span
								className='font-bold text-xs px-3 py-sm rounded-md outline-none border-2 focus:bg-neutral-light focus:outline-none cursor-pointer border-neutral-dark'
								onClick={handleAddPage}>
								Add Page
							</span>
						</div>
					</div>
					<h1 className='flex justify-center text-base font-bold mt-5'>
						Preview
					</h1>
					<div className='h-full flex justify-center mt-5'>
						{pdfFile != '' ? (
							<Document file={pdfFile} options={options}>
								<Page pageNumber={1} />
							</Document>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</ModeratorLayout>
	)
}

export default ModeratorBooksCreate
