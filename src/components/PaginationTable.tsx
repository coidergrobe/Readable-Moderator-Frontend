import Pagination from './Pagination'
import Table from './Table'
interface Props {
	thead: string[]
	tbodyKey: string[]
	tbodyData: any[]
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
	tbodyKey,
	tbodyData,
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
			<Table
				thead={thead}
				tbodyKey={tbodyKey}
				tbodyData={tbodyData}
				text={text}
				button={button}
			/>
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
