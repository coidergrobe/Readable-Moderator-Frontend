import Button from './Button'

interface Props {
	postsPerPage: number
	totalPosts: number
	paginate: (pageNumber: number) => void
	firstPage: (pageNumber: number) => void
	lastPage: (pageNumber: number) => void
	currentPage: number
	prevPage: (pageNumber: number) => void
	nextPage: (pageNumber: number) => void
}

const Pagination: React.FC<Props> = ({
	postsPerPage,
	totalPosts,
	paginate,
	firstPage,
	lastPage,
	currentPage,
	prevPage,
	nextPage,
}) => {
	const pageNumbers: number[] = []

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<nav>
			<ul className='flex justify-end items-center'>
				{currentPage === 1 ? (
					''
				) : (
					<>
						<Button
							onClick={() => firstPage(pageNumbers[0])}
							text='First'
							className='rounded-full'
							style={{
								borderColor: '#3ABD98',
								color: '#3ABD98',
								borderWidth: '1px',
								padding: '0.75rem 1.25rem',
							}}
						/>

						<Button
							onClick={() => prevPage(currentPage)}
							text='Previous'
							className='rounded-full ml-2'
							style={{
								borderColor: '#3ABD98',
								color: '#3ABD98',
								borderWidth: '1px',
								padding: '0.75rem 1.25rem',
							}}
						/>
					</>
				)}

				{pageNumbers.slice(currentPage - 1, currentPage + 1).map(number => (
					<>
						<li key={number} className=''>
							{currentPage == number ? (
								<>
									{currentPage == 1 ? (
										''
									) : (
										<a
											onClick={() => paginate(number)}
											href='#'
											className='px-5 py-3 border border-primary ml-2 rounded-full hover:bg-primary hover:text-neutral-lighter-tertiary-alt'>
											{number - 1}
										</a>
									)}
									<a
										onClick={() => paginate(number)}
										href='#'
										className='px-5 py-3 border border-primary ml-2 rounded-full bg-primary text-neutral-lighter-tertiary-alt'>
										{number}
									</a>
								</>
							) : (
								<a
									onClick={() => paginate(number)}
									href='#'
									className='px-5 py-3 border border-primary ml-2 rounded-full hover:bg-primary hover:text-neutral-lighter-tertiary-alt'>
									{number}
								</a>
							)}
						</li>
					</>
				))}

				{currentPage === pageNumbers.length ? (
					''
				) : (
					<>
						<Button
							onClick={() => nextPage(currentPage)}
							className='ml-2 rounded-full'
							primary
							text='Next'
							style={{ padding: '0.75rem 1.25rem' }}
						/>
						<Button
							onClick={() => lastPage(pageNumbers[pageNumbers.length - 1])}
							className='ml-2 rounded-full'
							primary
							text='Last'
							style={{ padding: '0.75rem 1.25rem' }}
						/>
					</>
				)}
			</ul>
		</nav>
	)
}

export default Pagination
