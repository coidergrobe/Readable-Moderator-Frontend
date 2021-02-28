import baseService from './base.service'

const getAll = () => {
	return baseService.request.get('/v1/moderators/Book/all')
}

const getDetail = (id: string) => {
	return baseService.request.get(`/v1/moderators/Book/${id}`)
}

export default {
	getAll,
	getDetail,
}
