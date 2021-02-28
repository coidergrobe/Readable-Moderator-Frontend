import styled from 'styled-components'

interface Props {
	direction?: 'horizontal' | 'vertical'
	children: JSX.Element | JSX.Element[] | string
	className?: string
}

type StyledProps = {
	direction: string
}

const FlipDiv = styled.div<StyledProps>`
	transform: ${({ direction }) =>
		direction === 'horizontal' ? 'scaleX(-1)' : 'scaleY(-1)'};
`

const Flip: React.FC<Props> = ({ direction, children, className }) => {
	return (
		<FlipDiv className={className} direction={direction as string}>
			{children}
		</FlipDiv>
	)
}

Flip.defaultProps = {
	direction: 'horizontal',
}

export default Flip
