import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface Props {
	onClick?: () => void
	children: JSX.Element | JSX.Element[] | string
	style?: React.CSSProperties | undefined
}

const Modal: React.FC<Props> = ({ onClick, children, style }) => {
	const portal = document.createElement('portal')
	const body = document.getElementsByTagName('body')[0]
	useEffect(() => {
		body.appendChild(portal)

		return () => {
			body.removeChild(portal)
		}
	}, [])

	return createPortal(
		<>
			<div
				className='fixed top-0 left-0 right-0 bottom-0 z-999 bg-neutral-dark bg-opacity-50'
				onClick={onClick}></div>
			<div
				className='fixed z-999 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-86'
				style={style}>
				{children}
			</div>
		</>,
		portal
	)
}

export default Modal
