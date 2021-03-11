import { useState } from 'react'

interface Props {
	id: string
	text: string
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const HorizontalCategory: React.FC<Props> = ({ id, text, onChange }) => {
	const [checked, setChecked] = useState<boolean>(false)

	const handleChecked = () => {
		setChecked(!checked)
		console.log(checked)
	}
	return (
		<div className='w-full h-10'>
			<input
				type='checkbox'
				id={id}
				className=''
				hidden
				onClick={handleChecked}
				defaultChecked={checked}
				onChange={onChange}
			/>
			{checked ? (
				<label
					htmlFor={id}
					className='border border-black bg-black text-white select-none rounded-full box-border px-5 py-2 font-semibold cursor-pointer'
					style={{ whiteSpace: 'nowrap' }}>
					{text}
				</label>
			) : (
				<label
					htmlFor={id}
					className='border border-black bg-white select-none rounded-full box-border px-5 py-2 font-semibold cursor-pointer'
					style={{ whiteSpace: 'nowrap' }}>
					{text}
				</label>
			)}
		</div>
	)
}

export default HorizontalCategory
