import classnames from 'classnames'
interface Props {
	text?: string
	className?: string
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
	primary?: boolean
}

const ActionButton: React.FC<Props> = ({
	text,
	className,
	onClick,
	primary,
}) => {
	return (
		<button
			onClick={onClick}
			className={classnames(
				'font-semibold text-xs  border-2 border-transparent',
				'px-3 py-sm rounded-md  hover:bg-opacity-20 focus:outline-none focus:bg-opacity-20 focus:bg-lighter-alt',
				{
					'text-neutral-ligher-alt': primary,
					'hover:bg-neutral-quaternary-alt': primary,
				},
				{
					'text-neutral-dark': !primary,
					'hover:bg-neutral-quaternary-alt': !primary,
				},
				className
			)}>
			{text}
		</button>
	)
}

ActionButton.defaultProps = {
	primary: false,
}

export default ActionButton
