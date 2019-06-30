import { combineReducers } from 'redux'
import { ENTITIES } from './../common/const'
import { createEntityReducer } from './../helpers/redux/reducers'

const reducersByEntity = ENTITIES.reduce((acc: any, entity) => {
	acc[entity] = createEntityReducer(entity)
	return acc
}, {})

export default combineReducers(reducersByEntity)
