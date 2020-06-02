import { all, takeLatest } from 'redux-saga/effects'
import { LOGIN, USERS } from './../../common/const'
import {
	fetchEntity,
	deleteEntity,
	createEntity,
	updateEntity,
} from './../../helpers/networkRequests'
import { URL } from '../../helpers/api'

const loginSaga = function*() {
	yield fetchEntity(USERS, URL.users.get)
	yield deleteEntity(USERS, 7, URL.users.delete(7))
	yield createEntity(USERS, { name: 'Polina', cars: [] }, URL.users.create)
	yield updateEntity(USERS, 6, { name: 'Masha', cars: [] }, URL.users.update(6))
}

function* watchLoginSaga() {
	yield takeLatest(LOGIN, loginSaga)
}

export default function* authPageSagas() {
	yield all([watchLoginSaga()])
}
