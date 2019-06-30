import { all } from 'redux-saga/effects'
import authPageSagas from '../pages/auth/sagas'

export default function* rootSaga() {
	yield all([authPageSagas()])
}
