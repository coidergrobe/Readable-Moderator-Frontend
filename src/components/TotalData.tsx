interface Props {
	icon?: JSX.Element | JSX.Element[] | string
	totalNumber?: string | number
	text?: string
}

const TotalData: React.FC<Props> = ({ icon, totalNumber, text }) => {
	return (
		<div
			className='flex items-center py-8 bg-white rounded-ttb w-full justify-center box-border pr-5'
			style={{ width: '320px' }}>
			<div className='mr-5 bg-primary bg-opacity-25 w-total h-total rounded-full flex items-center justify-center text-primary'>
				{icon}
			</div>
			<div>
				<div className='font-bold text-3xl'>{totalNumber}</div>
				<div className='text-base'>{text}</div>
			</div>
		</div>
	)
}

export default TotalData
