import classnames from 'classnames'

interface Props {
	className?: string
	text?: string
	primary?: boolean
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
	type?: 'button' | 'submit' | 'reset' | undefined
	style?: React.CSSProperties
}

const Button: React.FC<Props> = ({
	className,
	text,
	primary,
	onClick,
	type,
	style,
}) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={classnames(
				'font-bold text-xs',
				'px-3 py-sm rounded-md outline-none border-2 focus:bg-dark-alt focus:outline-none',
				{
					'bg-primary': primary,
					'hover:bg-dark-alt': primary,
					'border-primary': primary,
					'hover:border-dark-alt': primary,
					'text-lighter-alt': primary,
				},
				{
					'bg-transparent': !primary,
					'hover:bg-lighter-alt': !primary,
					'hover:bg-opacity-20': !primary,
					'border-neutral-dark border-2': !primary,
				},
				className
			)}
			style={style}>
			{text}
		</button>
	)
}

Button.defaultProps = {
	primary: false,
}

export default Button
