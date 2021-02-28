import Button from './Button'

const DetailsCard = () => {
	return (
		<div
			style={{ height: '280px', width: '280px' }}
			className='bg-white box-border p-10 rounded-ttb flex flex-col justify-around'>
			<div className='font-semibold text-2xl'>Today revenue</div>
			<div className='font-bold text-4xl'>400M</div>
			<div className='text-right'>
				<Button text='Details' primary className='rounded-full px-5' />
			</div>
		</div>
	)
}

export default DetailsCard
