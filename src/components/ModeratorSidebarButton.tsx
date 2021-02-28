interface Props {
	icon?: JSX.Element | JSX.Element[] | string
	text?: string
}

const ModeratorSidebarButton: React.FC<Props> = ({ icon, text }) => {
	return (
		<div className='flex flex-row hover:text-primary items-center my-4 cursor-pointer select-none'>
			<div>{icon}</div>
			<div className='font-semibold text-base ml-msb'>{text}</div>
		</div>
	)
}

export default ModeratorSidebarButton
