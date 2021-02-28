import classnames from 'classnames'

interface Props {
	className?: string
	style?: React.CSSProperties | undefined
}

const DraggableItem: React.FC<Props> = ({ className, style }) => {
	return (
		<>
			<img
				src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
				className={classnames('rounded-md object-cover', className)}
				style={{ width: '240px', height: '300px', userSelect: 'none' }}
			/>
		</>
	)
}

export default DraggableItem
