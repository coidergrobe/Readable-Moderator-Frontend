import Pagination from './Pagination'
import Table from './Table'

interface Tbody {
	data: any[]
	value: any[]
}

interface Props {
	thead: string[]
	tbody: Tbody
	text: string
	button: boolean
	postsPerPage: number
	totalPosts: number
	paginate: (pageNumber: number) => void
	firstPage: (pageNumber: number) => void
	lastPage: (pageNumber: number) => void
	currentPage: number
	prevPage: (pageNumber: number) => void
	nextPage: (pageNumber: number) => void
}

const PaginationTable: React.FC<Props> = ({
	thead,
	tbody,
	text,
	button,
	postsPerPage,
	totalPosts,
	paginate,
	currentPage,
	prevPage,
	nextPage,
}) => {
	return (
		<div>
			<Table thead={thead} tbody={tbody} text={text} button={button} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={totalPosts}
				paginate={paginate}
				firstPage={paginate}
				lastPage={paginate}
				currentPage={currentPage}
				prevPage={prevPage}
				nextPage={nextPage}
			/>
		</div>
	)
}

PaginationTable.defaultProps = {
	button: false,
}

export default PaginationTable
