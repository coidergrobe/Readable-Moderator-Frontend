import classnames from 'classnames'

interface Props {
	type?: string
	className?: string
	label?: string
	name?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
	value?: string
	id?: string
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({
	type,
	label,
	className,
	name,
	onChange,
	onBlur,
	value,
	id,
	onFocus,
}) => {
	return (
		<div>
			<label className='w-full text-sm font-bold text-neutral-primary'>
				{label}
			</label>
			<input
				type={type}
				className={
					value === ''
						? classnames(
								'w-full border-2 border-transparent bg-neutral-quaternary-alt focus:outline-none focus:border-neutral-dark focus:border-transparent focus:bg-white my-2 rounded-md py-xs px-2 active:bg-neutral-quaternary-alt',
								className
						  )
						: classnames(
								'w-full border-2 border-neutral-dark bg-white focus:outline-none focus:border-neutral-dark focus:border-transparent focus:bg-white my-2 rounded-md py-xs px-2 active:bg-white',
								className
						  )
				}
				onFocus={onFocus}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				name={name}
				id={id}
			/>
		</div>
	)
}

export default Input
