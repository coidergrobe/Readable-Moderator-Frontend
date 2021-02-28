import SlideSidebar from './SlideSidebar'

interface Props {
	className?: string
}

const Sidebar: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<div className='h-full bg-neutral-lighter-tertiary-alt rounded-lg'>
				<div className='p-6 h-full'>
					<SlideSidebar />
				</div>
			</div>
		</div>
	)
}

export default Sidebar
