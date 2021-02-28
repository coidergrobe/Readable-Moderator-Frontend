import { useEffect } from 'react'
import ReactDOM from 'react-dom'

interface Props {
	children?: string | JSX.Element | JSX.Element[]
	// className?: string
}

const Popup: React.FC<Props> = ({ children }) => {
	const div = document.createElement('div')
	useEffect(() => {
		const body = document.getElementsByTagName('body')[0]

		body.appendChild(div)

		return () => {
			body.removeChild(div)
		}
	}, [])

	return ReactDOM.createPortal(children, div)
}

export default Popup
