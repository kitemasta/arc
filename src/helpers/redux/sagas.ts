import { call, put } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import { actionsByEntityMap } from './../../actions'
import { schemas } from '../schemas'

export const fetchSaga = function*(entity: string, api: any) {
	try {
		yield put(actionsByEntityMap[entity].REQUEST())
		const { data } = yield call(api)
		yield put(actionsByEntityMap[entity].SUCCESS(normalize(data, [schemas[entity]])))
		return data
	} catch ({ message, status }) {
		yield put(actionsByEntityMap[entity].FAILURE({ message, status }))
	}
}
