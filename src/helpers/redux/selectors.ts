import { denormalize } from 'normalizr'
import { createSelector } from 'reselect'
import { schemas } from '../schemas'

interface Options {
	resultSelector: (state: any) => string[]
}

export const getEntitySelector = (
	entity: string,
	{ resultSelector = ({ meta }) => meta[entity].data }: Options = {} as Options
) =>
	createSelector(
		({ entities }) => entities,
		resultSelector,
		(entities, result) => denormalize(result, [schemas[entity]], entities)
	)

export const getOneEntitySelector = (entity: string) =>
	createSelector(
		({ entities }) => entities,
		(state: any, id: number) => id,
		(entities, id) => denormalize(id, schemas[entity], entities)
	)
