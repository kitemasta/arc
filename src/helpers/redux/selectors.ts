import { denormalize } from 'normalizr'
import { createSelector } from 'reselect'
import { schemas } from '../schemas'

export const getEntitySelector = (entity: string) =>
	createSelector(
		({ entities }) => entities,
		({ meta }) => meta[entity].data,
		(entities, result) => denormalize(result, [schemas[entity]], entities)
	)

export const getOneEntitySelector = (entity: string) =>
	createSelector(
		({ entities }) => entities,
		(state: any, id: number) => id,
		(entities, id) => denormalize(id, schemas[entity], entities)
	)
