import { all, takeLatest } from 'redux-saga/effects'
import { LOGIN } from './../../common/const'
import { getUsers, getCars } from './../../helpers/networkRequests'

const loginSaga = function*() {
	yield getUsers()
	yield getCars()
}

function* watchLoginSaga() {
	yield takeLatest(LOGIN, loginSaga)
}

export default function* authPageSagas() {
	yield all([watchLoginSaga()])
}
