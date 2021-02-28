import classnames from 'classnames'

interface Props {
	className?: string
	url?: string
}

const Avatar: React.FC<Props> = ({ className, url }) => {
	return (
		<>
			<img
				src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
				className={classnames('rounded-full w-8 h-8 object-cover', className)}
			/>
		</>
	)
}

export default Avatar
