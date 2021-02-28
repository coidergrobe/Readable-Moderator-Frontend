interface Props {
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	text: string
	id: string
}

const FileInput: React.FC<Props> = ({ onChange, text, id }) => {
	return (
		<div className='w-full'>
			<input type='file' id={id} hidden onChange={onChange} />

			<label htmlFor={id} className='w-full'>
				<div className='w-full bg-primary hover:bg-dark-alt text-white cursor-pointer box-border px-5 py-1 rounded-md text-center'>
					{text}
				</div>
			</label>
		</div>
	)
}

export default FileInput
