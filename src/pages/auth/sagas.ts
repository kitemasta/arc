import { all, takeLatest } from 'redux-saga/effects'
import { fetchSaga } from '../../helpers/redux/sagas'
import { API } from './../../helpers/api'
import { LOGIN } from './../../common/const'

const loginSaga = function*(action: any) {
	yield fetchSaga(action.meta.entity, API.get('/users'))
}

function* watchLoginSaga() {
	yield takeLatest(LOGIN, loginSaga)
}

export default function* authPageSagas() {
	yield all([watchLoginSaga()])
}
