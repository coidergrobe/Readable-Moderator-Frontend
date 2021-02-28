import { bookService } from '../services'

const getAll = () => {
	return () => {
		return bookService.getAll().then((res: any) => {
			return res.data
		})
	}
}

const getDetail = (id: string) => {
	return () => {
		return bookService.getDetail(id).then((res: any) => {
			res.data
		})
	}
}

export default {
	getAll,
	getDetail,
}
