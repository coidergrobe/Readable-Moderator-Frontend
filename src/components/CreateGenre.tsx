import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from './Input'
import Button from './Button'
import UnderlineTitle from './UnderlineTitle'

const CreateGenre = () => {
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
					<span className='flex justify-end'>
						<div style={{ width: '100px', height: '30px' }}>
							<Button
								text='Create'
								className='w-full mt-2 bg-neutral-primary text-neutral-lighter-alt hover:text-neutral-primary'
								type='submit'
							/>
						</div>
					</span>
				</form>
			</div>
		</>
	)
}

export default CreateGenre
