import { FETCH, DELETE, CREATE, UPDATE } from './../common/const'
import { API } from './api'
import { fetchEntitySaga } from './redux/sagas'

export const fetchEntity = (entity: string) =>
	fetchEntitySaga(entity, API.get(`/${entity}`), { method: FETCH })

export const deleteEntity = (entity: string, id: number) =>
	fetchEntitySaga(entity, API.delete(`${entity}/${id}`), { method: DELETE, id })

export const createEntity = (entity: string, data: any) =>
	fetchEntitySaga(entity, API.post(`/${entity}`, data), { method: CREATE })

export const updateEntity = (entity: string, id: number, data: any) =>
	fetchEntitySaga(entity, API.put(`/${entity}/${id}`, data), { method: UPDATE, id })
