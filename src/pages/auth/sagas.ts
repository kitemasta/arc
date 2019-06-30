import { all, takeLatest } from 'redux-saga/effects'
import { fetchSaga } from '../../helpers/redux/sagas'
import { API } from './../../helpers/api'
import { LOGIN } from './../../common/const'

const authSaga = function*(action: any) {
	yield fetchSaga(action.meta.entity, API.get('/users/2'), {
		storeField: 'entityById',
	})
	yield fetchSaga(action.meta.entity, API.get('/users'), {
		isAuthenticated: true,
	})
}

function* watchAuthSaga() {
	yield takeLatest(LOGIN, authSaga)
}

export default function* authPageSagas() {
	yield all([watchAuthSaga()])
}
