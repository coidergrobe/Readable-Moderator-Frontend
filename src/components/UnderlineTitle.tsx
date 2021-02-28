import classnames from 'classnames'

interface Props {
	name?: string
	className?: string
	underline?: string
}

const UnderlineTitle: React.FC<Props> = ({ name, className, underline }) => {
	return (
		<div
			className={classnames(
				'relative my-4 inline-block font-bold text-lg',
				className
			)}>
			{name}
			<div
				className={classnames(
					'absolute left-0 top-7 w-70p h-5p bg-tertiary',
					underline
				)}></div>
		</div>
	)
}

export default UnderlineTitle
