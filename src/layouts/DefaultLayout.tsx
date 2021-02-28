import Navbar from '../components/Navbar'

interface Props {
	children: JSX.Element | JSX.Element[] | string
}
const DefaultLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default DefaultLayout
