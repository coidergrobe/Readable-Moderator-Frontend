import ModeratorSidebar from '../components/ModeratorSidebar'

interface Props {
	children?: JSX.Element | JSX.Element[] | string
}

const ModeratorLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<div className='flex flex-row h-full'>
				<div className='w-86 h-screen'>
					<ModeratorSidebar />
				</div>
				<div className='w-screen h-full flex'>
					<div className='flex-grow mx-3 my-3 bg-neutral-lighter-alt rounded-lg box-border'>
						{children}
					</div>
				</div>
			</div>
		</>
	)
}

export default ModeratorLayout
