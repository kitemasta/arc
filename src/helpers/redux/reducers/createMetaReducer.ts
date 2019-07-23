import * as types from '../../../common/const'

const initialState = {
	isLoading: false,
	error: null,
	data: null,
	pagination: null,
}

export const createMetaReducer = (entity: string) => (
	state = initialState,
	{ type, payload, meta: { entity: metaEntity = '', ...r } = {} }: any = {}
) => {
	if (entity !== metaEntity) return state

	switch (type) {
		case types.REQUEST:
			return { ...state, isLoading: true, error: null }
		case types.SUCCESS:
			return { ...state, isLoading: false, data: payload.result, ...r }
		case types.FAILURE:
			return { ...state, isLoading: false, error: payload }
		case types.RESET:
			return initialState
		default:
			return state
	}
}
