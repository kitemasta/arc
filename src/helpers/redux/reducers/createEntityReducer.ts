import * as types from '../../../common/const'

const initialState = {}

export const createEntityReducer = (entity: string) => (
	state = initialState,
	{ type, payload, meta = {} }: any = {}
) => {
	if (entity !== meta.entity) return state

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
