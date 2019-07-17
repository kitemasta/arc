import { has } from 'lodash'
import * as types from '../../../common/const'

const initialState = {}

export const createEntityReducer = (entity: string) => (
	state = initialState,
	{ type, payload }: any = {}
) => {
	if (!has(payload, `entities.${entity}`)) return state

	switch (type) {
		case types.SUCCESS:
			return {
				...state,
				...payload.entities[entity],
			}
		case types.RESET:
			return initialState
		default:
			return state
	}
}
