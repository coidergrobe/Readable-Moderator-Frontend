import { UilSearch } from '@iconscout/react-unicons'
import Button from './Button'
import { useState } from 'react'
import classnames from 'classnames'

interface Props {
	type?: string
	label?: string
	name?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	value?: string
	id?: string
	placeholder?: string
	button?: boolean
	className?: string
	bgc: string | (() => string)
}

const SearchBox: React.FC<Props> = ({
	type,
	name,
	onChange,
	value,
	id,
	placeholder,
	button,
	className,
	bgc,
}) => {
	const [backgroundColor, setBackgroundColor] = useState<string>(bgc)

	const handleFocus = () => {
		setBackgroundColor('white')
	}

	const handleBlur = () => {
		if (value == '') {
			setBackgroundColor(bgc)
		} else {
			setBackgroundColor('white')
		}
	}

	return (
		<>
			{button ? (
				<div
					className={classnames(
						'flex items-center w-full border border-transparent bg-neutral-quaternary-alt my-2 rounded-full py-1 pl-3 pr-1',
						className
					)}
					style={{ backgroundColor: backgroundColor }}>
					<span className='cursor-pointer'>
						<UilSearch />
					</span>
					<input
						type={type}
						className='w-full bg-neutral-quaternary-alt placeholder-neutral-tertiary-alt focus:border-transparent focus:outline-none ml-2 select-none'
						style={{ backgroundColor: backgroundColor }}
						onFocus={handleFocus}
						onChange={onChange}
						onBlur={handleBlur}
						value={value}
						name={name}
						id={id}
						placeholder={placeholder}
					/>
					<Button primary text='Search' className='rounded-full text-sm' />
				</div>
			) : (
				<div
					className='flex items-center w-full border border-transparent bg-neutral-quaternary-alt my-2 rounded-full py-1 pl-3 pr-1'
					style={{ backgroundColor: backgroundColor }}>
					<UilSearch />
					<input
						type={type}
						className='w-full bg-neutral-quaternary-alt placeholder-neutral-tertiary-alt focus:border-transparent focus:outline-none ml-2 select-none'
						style={{ backgroundColor: backgroundColor }}
						onFocus={handleFocus}
						onChange={onChange}
						onBlur={handleBlur}
						value={value}
						name={name}
						id={id}
						placeholder={placeholder}
					/>
				</div>
			)}
		</>
	)
}

SearchBox.defaultProps = {
	button: false,
}

export default SearchBox
