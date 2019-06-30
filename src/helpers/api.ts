import axios from 'axios'

export const API = {
	get: (url: string) => () => axios.get(url),
	post: (url: string, data: any) => () => axios.post(url, data),
	put: (url: string, data: any) => () => axios.put(url, data),
	delete: (url: string) => () => axios.delete(url),
}
