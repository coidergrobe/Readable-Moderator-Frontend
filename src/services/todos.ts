import { jsonplaceholderUrl } from '../configs'
import { goGet, request } from '../utils/endpoint'

export interface Todo {
	userid: number
	id: number
	title: string
	completed: boolean
}

export const todoApi = {
	getById: (id: number) => {
		const endpoint = goGet(`${jsonplaceholderUrl}/todos/${id}`, false)
		return request<Todo>(endpoint)
	},
}
