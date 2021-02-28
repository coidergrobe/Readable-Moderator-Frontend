import { backendUrl } from '../configs'
import axios, { AxiosRequestConfig } from 'axios'

export enum HttpMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

interface Endpoint {
	url: string
	method: HttpMethod | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}

// Util function to make endpoint
const makeEndPoint = (
	httpMethod: HttpMethod,
	path: string,
	useBaseUrl: boolean
): Endpoint => {
	if (useBaseUrl)
		return {
			url: `${backendUrl}/${path}`,
			method: httpMethod,
		}

	return {
		url: path,
		method: httpMethod,
	}
}

// Util function to make endpoint based on method
export const goGet = (path: string, useBaseUrl: boolean = true) =>
	makeEndPoint(HttpMethod.GET, path, useBaseUrl)
export const goPost = (path: string, useBaseUrl: boolean = true) =>
	makeEndPoint(HttpMethod.POST, path, useBaseUrl)
export const goPut = (path: string, useBaseUrl: boolean = true) =>
	makeEndPoint(HttpMethod.PUT, path, useBaseUrl)
export const goPatch = (path: string, useBaseUrl: boolean = true) =>
	makeEndPoint(HttpMethod.PATCH, path, useBaseUrl)
export const goDelete = (path: string, useBaseUrl: boolean = true) =>
	makeEndPoint(HttpMethod.DELETE, path, useBaseUrl)

interface RequestPayload<Data = any> {
	data?: Data
	headers?: { [key: string]: any }
}

// Util function to request api endpoint with axios
export const request = <Response, Data = any>(
	endpoint: Endpoint,
	payload: RequestPayload<Data> = {},
	options: AxiosRequestConfig = {}
) => {
	return axios.request<Response>({
		...endpoint,
		...payload,
		...options,
	})
}
