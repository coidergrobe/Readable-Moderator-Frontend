import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import DraggableItem from './DraggableItem'

const Draggable = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	}

	const draggable = []

	for (let i = 0; i < 10; i++) {
		const drag = <DraggableItem />

		draggable.push(drag)
	}
	return (
		<div className='box-border' style={{ cursor: 'grab' }}>
			<Carousel
				responsive={responsive}
				infinite={true}
				arrows={false}
				partialVisible={true}
				swipeable={false}>
				{draggable.map(d => (
					<div key={1}>{d}</div>
				))}
			</Carousel>
		</div>
	)
}

export default Draggable
