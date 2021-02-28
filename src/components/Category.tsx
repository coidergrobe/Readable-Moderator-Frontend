import { useState } from 'react'
import { UisCheckCircle } from '@iconscout/react-unicons-solid'

interface Props {
	id?: string
	name?: string
	src?: string | undefined
}

const Category: React.FC<Props> = ({ id, name, src }) => {
	const [checked, setChecked] = useState<boolean>(false)

	const handleChecked = () => {
		setChecked(!checked)
	}

	return (
		<div>
			<input
				type='checkbox'
				id={id}
				className=''
				hidden
				onClick={handleChecked}
				defaultChecked={checked}
			/>
			<label htmlFor={id}>
				<div className='relative'>
					<img src={src} className=' rounded-md h-ip object-cover' />

					{checked ? (
						<>
							<div className='absolute bg-neutral-secondary bg-opacity-95 w-full h-full top-0 transition-all duration-500 rounded-md select-none cursor-pointer'>
								<p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-lighter-alt font-bold'>
									{name}
								</p>
							</div>
							<div className='absolute top-2 right-2'>
								<UisCheckCircle className='text-lighter-alt' />
							</div>
						</>
					) : (
						<div className='absolute bg-neutral-secondary bg-opacity-60 w-full h-full top-0 hover:bg-opacity-95 transition-all duration-500 rounded-md select-none cursor-pointer'>
							<p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-lighter-alt font-bold'>
								{name}
							</p>
						</div>
					)}
				</div>
			</label>
		</div>
	)
}

export default Category
