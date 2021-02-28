import MainNavbar from '../components/MainNavbar'
import { useState } from 'react'

interface Props {
	children?: JSX.Element | JSX.Element[] | string
}
const MainLayout: React.FC<Props> = ({ children }) => {
	const [width, setWidth] = useState<string>('100%')

	const handleClick = () => {
		if (width === 'calc(100% - 440px)') {
			setWidth('100%')
		} else {
			setWidth('calc(100% - 440px)')
		}
	}
	return (
		<div className='w-full overflow-hidden'>
			<div
				style={{ width: width, height: '100vh' }}
				className='transition-all duration-200'>
				<MainNavbar onClick={handleClick} />
				<div className='w-full h-full'>{children}</div>
			</div>
		</div>
	)
}

export default MainLayout
