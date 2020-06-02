// import { identity, noop } from 'lodash'
import { createAction } from 'redux-actions'
import * as types from '../../common/const'

// create REQUEST, SUCCESS, FAILURE, RESET action for passed entity such as 'user' etc.

const actionTypes = [types.REQUEST, types.SUCCESS, types.FAILURE, types.RESET]

export const createEntityActions = (entity: string) =>
	actionTypes.reduce((acc: any, type) => {
		acc[type] = (payload: any, meta: any) =>
			createAction(`${entity.toUpperCase()}_${type}`, _ => payload, _ => ({ entity, ...meta }))()
		return acc
	}, {})

// const payloadCreator = identity
// const metaCreator = (_: any, resolve = noop, reject = noop) => ({ resolve, reject })

// export const promiseAction = (type: string) => createAction(type, payloadCreator, metaCreator)

// export const bindActionToPromise = (dispatch: any, actionCreator: any) => (payload: any) => {
// 	return new Promise((resolve, reject) => dispatch(actionCreator(payload, resolve, reject)))
// }

// const metaCreator =

// export const promiseAction = type => createAction(type, payloadCreator, metaCreator)

// 1 flow

// const wrapInPromise = creator => (...args) => dispatch => {
// 	const baseAction = creator(...args)

// 	return new Promise((resolve, reject) => {
// 		dispatch({ ...baseAction, resolve, reject })
// 	})
// }

// const openModal = wrapInPromise(() => ({ type: 'OPEN_MODAL' }))
// const delete = ...
// const fetch = ...

// const mapDispatchToProps = {openModal, delete, fetch}

// const deleteUser = async (id) => {
// 	await openModal()

// 	await delete(id)

// 	fetch(currentQuery)
// }

// 2 flow

// const openModal = () => ({ type: 'OPEN_MODAL' })
// const delete = ...
// const fetch = ...

// const di4 = (id) => ({
// 	type: 'SOME_TYPE',
// 	resolve: function* huita() {
// 		yield call
// 	}
// })

// const runDeleteUserFlow = id => ({ type: 'DELETE_USER_FLOW' })

// const mapDispatchToProps = { runDeleteUserFlow }

// const makeHuita = (...args) => function* huitaWorker() {
// 	yield all([{ action: () => {}, result: action => {} }].map(({action, result}) => function* () { yield put(action()) yield take(result) }))
// }

// makeHuita(
// 	{ action: () => openModal({}), result: action => action.type === 'CLOSE_MODAL' && action.paylaod === modalId },
// )

// (entityKey) => {
// 	const delete1 = makeDelete()
// 	const fetch1 = makeFetch()
// 	const triger = id => ({ type: 'DELETE_USER_FLOW' })

// 	const worker =  function* deleteUserWorker({ payload: userId }) {
// 		// variant 1
// 		const modalAction = openModal()
// 		const modalId = modalAction.id

// 		// yield call(deleteEntityWorker, delete1(userId))

// 		yield put(modalAction)

// 		yield take(action => action.type === 'CLOSE_MODAL' && action.paylaod === modalId)

// 		yield put(delete1(userId))

// 		yield take(action => action.type === 'DELETE_ENTITY' && action.meta.entity === 'USER' && action.payload === userId)

// 		yield put(fetch1({ ...currentQuery }))

// 		// variant
// 	}

// 	const watcher = function* deleteUserFlowWatcher() {
// 		yield takeEvery(action => action.type === 'DELETE_ENTITY' && action.meta.entity === 'USER', deleteUserWorker)
// 	}

// 	return { triger, worker, watcher }
// }
