import classnames from 'classnames'

interface Props {
	children: JSX.Element | JSX.Element[] | string
	size?: 'full' | 'sm' | 'lg' | 'xl'
	className?: string
	style?: React.CSSProperties | undefined
}

const Container: React.FC<Props> = ({ size, children, className, style }) => {
	return (
		<div
			className={classnames(
				{
					'mx-52': size === 'sm',
				},
				{
					'mx-32': size === 'lg',
				},
				{
					'mx-8': size === 'xl',
				},
				className
			)}
			style={style}>
			{children}
		</div>
	)
}

Container.defaultProps = {
	size: 'full',
}

export default Container
