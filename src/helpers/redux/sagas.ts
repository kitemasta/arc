import { call, put } from 'redux-saga/effects'
// import { normalize } from 'normalizr'
import { actionsByEntityMap } from './../../actions/index'
// import { usersSchema } from '../schemas/users'

export const fetchSaga = function*(entity: string, api: any, metaData?: any) {
	try {
		yield put(actionsByEntityMap[entity].REQUEST())
		const { data } = yield call(api)
		yield put(actionsByEntityMap[entity].SUCCESS(data, metaData))
		return data
	} catch ({ message, status }) {
		yield put(actionsByEntityMap[entity].FAILURE({ message, status }))
	}
}
