import { FETCH, DELETE, CREATE, UPDATE } from './../common/const'
import { API } from './api'
import { fetchEntitySaga } from './redux/sagas'

export const fetchEntity = (entity: string, url: string) =>
	fetchEntitySaga(entity, API.get(url), { method: FETCH })

export const deleteEntity = (entity: string, id: number, url: string) =>
	fetchEntitySaga(entity, API.delete(url), { method: DELETE, id })

export const createEntity = (entity: string, data: any, url: string) =>
	fetchEntitySaga(entity, API.post(url, data), { method: CREATE })

export const updateEntity = (entity: string, id: number, data: any, url: string) =>
	fetchEntitySaga(entity, API.put(url, data), { method: UPDATE, id })
