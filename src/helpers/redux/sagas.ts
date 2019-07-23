import { call, put } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import { actionsByEntityMap } from './../../actions'
import { schemas } from '../schemas'

interface Meta {
	pagination?: any
}

export const fetchSaga = function*(entity: string, api: any) {
	try {
		yield put(actionsByEntityMap[entity].REQUEST())
		const {
			data,
			headers: { link },
		} = yield call(api)

		let meta: Meta = {}

		if (link) {
			const linkRegEx = /page=\d/g
			const pages = link.match(linkRegEx)
			const isLastPage = pages.length === 3 && link.includes('prev')

			if (pages.length === 3 && !isLastPage) {
				meta.pagination = {
					first: +pages[0].split('=')[1],
					next: +pages[1].split('=')[1],
					last: +pages[2].split('=')[1],
				}
			} else if (pages.length === 3 && isLastPage) {
				meta.pagination = {
					first: +pages[0].split('=')[1],
					prev: +pages[1].split('=')[1],
					last: +pages[2].split('=')[1],
				}
			} else {
				meta.pagination = {
					first: +pages[0].split('=')[1],
					prev: +pages[1].split('=')[1],
					next: +pages[2].split('=')[1],
					last: +pages[3].split('=')[1],
				}
			}
		}

		yield put(actionsByEntityMap[entity].SUCCESS(normalize(data, [schemas[entity]]), meta))
		return { data, link }
	} catch ({ message, status }) {
		yield put(actionsByEntityMap[entity].FAILURE({ message, status }))
	}
}
