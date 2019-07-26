import { all, takeLatest } from 'redux-saga/effects'
import { LOGIN, USERS } from './../../common/const'
import {
	fetchEntity,
	deleteEntity,
	createEntity,
	updateEntity,
} from './../../helpers/networkRequests'
// import { deleteEntityFlow } from '../../helpers/redux/sagas'

const loginSaga = function*() {
	yield fetchEntity(USERS)
	yield deleteEntity(USERS, 7)
	yield createEntity(USERS, { name: 'Polina', cars: [] })
	yield updateEntity(USERS, 6, { name: 'Masha', cars: [] })
	// yield call(deleteEntityFlow, { type: 'delete_entity', meta: { entity: USERS }, payload: 6 })
}

function* watchLoginSaga() {
	yield takeLatest(LOGIN, loginSaga)
}

export default function* authPageSagas() {
	yield all([watchLoginSaga()])
}
