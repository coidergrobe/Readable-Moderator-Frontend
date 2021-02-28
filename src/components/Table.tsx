import Button from './Button'

interface Tbody {
	data: any[]
	value: any[]
}

interface Props {
	thead: string[]
	tbody: Tbody
	text?: string
	button?: boolean
}

const Table: React.FC<Props> = ({ thead, tbody, text, button }) => {
	return (
		<>
			<table className='rounded-ttb bg-white box-border w-full mb-5'>
				<thead style={{ backgroundColor: '#f5f5f5' }}>
					<tr id='table-rounded'>
						{thead.map(th => (
							<th className='py-5 pl-10 text-left' key={th}>
								{th}
							</th>
						))}
					</tr>
				</thead>

				<tbody>
					{tbody.data.map(t => {
						return (
							<tr key={t[tbody.value[0]]}>
								<td className='py-5 px-5 border-t' style={{ width: '30%' }}>
									{t[tbody.value[0]]}
								</td>
								<td className='py-5 px-5 border-t' style={{ width: '30%' }}>
									{t[tbody.value[1]]}
								</td>
								<td className='py-5 px-5 border-t' style={{ width: '30%' }}>
									{t[tbody.value[2]]}
								</td>
								{button ? (
									<td className='py-5 px-5 border-t' style={{ width: '10%' }}>
										<Button
											text={text}
											primary
											className='rounded-full'
											style={{ padding: '0.75rem 1.75rem' }}
										/>
									</td>
								) : (
									''
								)}
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}

Table.defaultProps = {
	button: false,
}

export default Table
