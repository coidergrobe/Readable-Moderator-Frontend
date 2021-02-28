import Draggable from './Draggable'
import UnderlineTitle from './UnderlineTitle'

interface Props {
	name?: string
}

const BookCarousel: React.FC<Props> = ({ name }) => {
	return (
		<div className='mb-5'>
			<UnderlineTitle name={name} />
			<Draggable />
		</div>
	)
}

export default BookCarousel
