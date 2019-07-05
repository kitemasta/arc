import * as types from '../../../common/const'

const initialState = {
	isLoading: false,
	error: null,
	data: null,
}

export const createMetaReducer = (entity: string) => (
	state = initialState,
	{ type, payload, meta = {} }: any = {}
) => {
	if (entity !== meta.entity) return state

	switch (type) {
		case types.REQUEST:
			return { ...state, isLoading: true, error: null }
		case types.SUCCESS:
			return { ...state, isLoading: false, data: payload.result }
		case types.FAILURE:
			return { ...state, isLoading: false, error: payload }
		case types.RESET:
			return initialState
		default:
			return state
	}
}
