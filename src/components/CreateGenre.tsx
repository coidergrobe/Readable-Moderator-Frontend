import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from './Input'
import Button from './Button'
import { useState } from 'react'
import axios from 'axios'

const CreateGenre = () => {
	const [uploadedPreview, setUploadedPreview] = useState('')
	const [uploadedFile, setUploadedFile] = useState('')
	const [uploadedThumbnail, setUploadedThumbnail] = useState('')

	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3d3dy5yZWFkYWJsZS5jZiIsImF1ZCI6Imh0dHBzOi8vd3d3LnJlYWRhYmxlLmNmIn0.8gWOkSBrFZ5vDPeNJChnCZQulCkrByso0tNp0wwidu8'

	const url = 'http://168.63.247.4/v1'

	const formik = useFormik({
		initialValues: {
			genre: '',
		},
		validationSchema: Yup.object({
			genre: Yup.string().trim().required('Field required'),
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		},
	})

	const handleFileChange = (e: any) => {
		setUploadedPreview(URL.createObjectURL(e.target.files[0]))
		setUploadedFile(e.target.files[0])
	}

	const uploadThumbnail = () => {
		const file = uploadedFile

		const formData = new FormData()

		formData.append('image', file)

		axios
			.post(`${url}/moderators/genres/thumbnail`, formData, {
				headers: {
					Authorization: `Bearer ${token}`,
					'content-type': 'multipart/form-data',
				},
			})
			.then(res => {
				setUploadedThumbnail(res.data)
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
	}

	const uploadGenre = () => {
		axios
			.post(
				`${url}/moderators/genres`,
				{
					name: formik.values.genre,
					thumbnail: uploadedThumbnail,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err.response)
			})
	}

	const handlePickAnotherPreview = () => {
		setUploadedPreview('')
	}

	const handleFormSubmit = async (e: any) => {
		e.preventDefault()

		uploadThumbnail()

		uploadGenre()
	}

	return (
		<>
			<div className='bg-white p-6 rounded-md'>
				<form onSubmit={formik.handleSubmit}>
					<div>
						<Input
							type='text'
							label='Genre'
							id='genre'
							name='genre'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.genre}
						/>
						{formik.touched.genre && formik.errors.genre ? (
							<div className='text-error'>{formik.errors.genre}</div>
						) : null}
					</div>

					<span className='flex justify-between items-center mt-2'>
						<input
							type='file'
							onChange={handleFileChange}
							hidden
							id='upload-file'
						/>
						<div>
							{uploadedPreview != '' ? (
								<span
									className='bg-neutral-primary text-neutral-lighter-alt hover:text-neutral-primary hover:bg-neutral-lighter-alt border-2 border-neutral-primary focus:outline-none px-3 py-sm text-xs rounded-md font-bold outline-none cursor-pointer'
									onClick={handlePickAnotherPreview}>
									Pick another thumbnail
								</span>
							) : (
								<label htmlFor='upload-file'>
									<span className='bg-neutral-primary text-neutral-lighter-alt hover:text-neutral-primary hover:bg-neutral-lighter-alt border-2 border-neutral-primary focus:outline-none px-3 py-sm text-xs rounded-md font-bold outline-none cursor-pointer'>
										Upload Thumbnail
									</span>
								</label>
							)}
						</div>
						<div>
							<Button
								text='Create'
								className='w-full bg-neutral-primary text-neutral-lighter-alt hover:text-neutral-primary'
								type='submit'
								onClick={handleFormSubmit}
							/>
						</div>
					</span>
				</form>
				{uploadedPreview != '' ? (
					<div className='mt-5'>
						<div className='font-semibold text-base'>Thumbnail</div>
						<div>
							<img src={uploadedPreview} className='object-cover' />
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</>
	)
}

export default CreateGenre
