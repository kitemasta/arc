import { ENTITIES } from './../common/const'

export const createReducersFromEntities = (reducerFactory: any) =>
	ENTITIES.reduce((acc: any, entity) => {
		acc[entity] = reducerFactory(entity)
		return acc
	}, {})
