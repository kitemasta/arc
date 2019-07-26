import { call, put } from 'redux-saga/effects'
import { isArray, isEmpty } from 'lodash'
import { normalize } from 'normalizr'
import { actionsByEntityMap } from './../../actions'
import { schemas } from '../schemas'

interface Meta {
	method: string
	pagination?: any
}

export const fetchEntitySaga = function*(entity: string, api: any, { method, id }: any) {
	try {
		yield put(actionsByEntityMap[entity].REQUEST(null, { method }))
		const {
			data,
			headers: { link },
		} = yield call(api)

		let meta: Meta = { method }

		// delete in normal project !!

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
		const schema = isArray(data) ? [schemas[entity]] : schemas[entity]
		const payload = isEmpty(data) ? { ...normalize(data, schema), id } : normalize(data, schema)

		yield put(actionsByEntityMap[entity].SUCCESS(payload, meta))
		return { data, link }
	} catch ({ message, status }) {
		yield put(actionsByEntityMap[entity].FAILURE({ message, status }, { method }))
	}
}
