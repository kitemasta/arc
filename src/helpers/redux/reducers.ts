import * as types from '../../common/const'

const initialState = {
	isLoading: false,
	error: null,
	data: null,
	meta: {},
}

export const createEntityReducer = (entity: string) => (
	state = initialState,
	{ type, payload, meta = {} }: any = {}
) => {
	if (entity !== meta.entity) return state

	switch (type) {
		case types.REQUEST:
			return { ...state, isLoading: true, error: null }
		case types.SUCCESS:
			const { storeField, ...r } = meta
			return {
				...state,
				isLoading: false,
				data: storeField ? state.data : payload,
				meta: { ...state.meta, ...r },
			}
		case types.FAILURE:
			return { ...state, isLoading: false, error: payload }
		case types.RESET:
			return initialState
		default:
			return state
	}
}
