import Button from './Button'

interface Props {
	thead: string[]
	tbodyKey: string[]
	tbodyData: any[]
	text?: string
	button?: boolean
}

const Table: React.FC<Props> = ({
	thead,
	tbodyKey,
	tbodyData,
	text,
	button,
}) => {
	const theadArr = []

	for (let i = 0; i < thead.length; i++) {
		theadArr.push(<th className='py-5 pl-10 text-left'>{thead[i]}</th>)
	}

	return (
		<>
			<table className='rounded-ttb bg-white box-border w-full mb-5'>
				<thead style={{ backgroundColor: '#f5f5f5' }}>
					<tr id='table-rounded'>{theadArr}</tr>
				</thead>
				<tbody>
					{tbodyData.map(tbd => {
						return (
							<tr key={tbd.id}>
								{tbodyKey.map(tbkey => {
									return (
										<td
											className='py-5 px-5 border-t first:w-15p'
											key={tbd.id}
											style={{ width: `calc(100% / ${thead.length})` }}>
											{tbd[tbkey]}
										</td>
									)
								})}
								{button ? (
									<td className='py-5 px-5 border-t text-center'>
										<Button
											primary
											text={text}
											className='rounded-full px-5 text-sm'
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
