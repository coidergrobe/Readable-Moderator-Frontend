import SimpleNavbar from '../components/SimpleNavbar'

interface Props {
	children?: JSX.Element | JSX.Element[] | string
}

const PresentationLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<SimpleNavbar className='absolute w-full' />
			{children}
		</>
	)
}

export default PresentationLayout
