import classnames from 'classnames'

interface Props {
	imgUrl?: string
	text?: string
	size?: PersonaSize
	showInfo?: boolean
	className?: string
}

export enum PersonaSize {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
}

const getClassSize = (size: PersonaSize): string => {
	switch (size) {
		case PersonaSize.sm: {
			return 'w-7 h-7'
		}
		case PersonaSize.lg: {
			return 'w-15 h-15'
		}
		default: {
			return 'w-10 h-10'
		}
	}
}

const Persona: React.FC<Props> = ({
	size,
	showInfo,
	imgUrl,
	className,
	text,
}) => {
	return (
		<div className={classnames('persona-wrapper', className)}>
			<div className='persona-inner flex items-center'>
				{imgUrl ? (
					<img
						src={imgUrl}
						className={classnames(
							'persona-img',
							getClassSize(size as PersonaSize),
							'object-cover rounded-full'
						)}
					/>
				) : (
					<div
						className={classnames(
							'persona-img',
							getClassSize(size as PersonaSize),
							'bg-black rounded-full text-neutral-light flex justify-center items-center'
						)}>
						A
					</div>
				)}
				{showInfo && <div className='persona-text'>{text}</div>}
			</div>
		</div>
	)
}

Persona.defaultProps = {
	size: PersonaSize.md,
	showInfo: true,
}

export default Persona
