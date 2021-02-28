interface Props {
	fontSize?: string
	colors?: string[]
	className?: string
}

const Logo: React.FC<Props> = ({ colors, fontSize, className }) => {
	return (
		<svg
			id='Layer_1'
			width={fontSize}
			height={fontSize}
			data-name='Layer 1'
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 1000 1000'>
			<polygon
				fill={colors![2]}
				points='748.3 500 696.34 500 496.6 500 444.64 500 696.34 1000 748.3 1000 948.04 1000 1000 1000 748.3 500'
				style={{ opacity: 0.8 }}
			/>
			<polygon
				fill={colors![1]}
				points='251.7 748.3 251.7 251.7 384.69 251.7 384.69 0 0 0 0 1000 636.39 1000 509.69 748.3 251.7 748.3'
			/>
			<polygon
				fill={colors![0]}
				points='444.64 0 444.64 251.7 748.3 251.7 748.3 500 1000 500 1000 0 444.64 0'
			/>
		</svg>
	)
}

Logo.defaultProps = {
	fontSize: '20px',
	colors: ['#4F6BED', '#4F6BED', '#F7F9FE'],
}

export default Logo
