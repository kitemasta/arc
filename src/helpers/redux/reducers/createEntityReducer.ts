import { has, omit } from 'lodash'
import * as types from '../../../common/const'

const initialState = {}

export const createEntityReducer = (entity: string) => (
	state = initialState,
	{ type, payload }: any = {}
) => {
	if (!has(payload, `entities.${entity}`)) return state

	switch (type) {
		case `${types.FETCH}_${types.SUCCESS}`:
		case `${types.CREATE}_${types.SUCCESS}`:
		case `${types.UPDATE}_${types.SUCCESS}`:
			return {
				...state,
				...payload.entities[entity],
			}
		case `${types.DELETE}_${types.SUCCESS}`:
			return omit(state, payload.id)
		case types.RESET:
			return initialState
		default:
			return state
	}
}
