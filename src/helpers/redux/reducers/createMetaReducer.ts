import * as types from '../../../common/const'

const initialState = {
	isLoading: false,
	error: null,
	data: [],
	pagination: {},
	sorting: {},
	filtering: {},
}

export const createMetaReducer = (entityArg: string) => (
	state = initialState,
	{ type, payload, meta: { method = '', entity: metaEntity = '', ...r } = {} }: any = {}
) => {
	if (entityArg !== metaEntity) return state

	switch (type) {
		case types.REQUEST:
			return { ...state, isLoading: true, error: null }
		case `${types.FETCH}_${types.SUCCESS}`:
			return { ...state, isLoading: false, data: payload.result, ...r }
		case `${types.DELETE}_${types.SUCCESS}`:
			return {
				...state,
				isLoading: false,
				data: state.data.filter((el: number) => el !== payload.id),
				...r,
			}
		case `${types.CREATE}_${types.SUCCESS}`:
			return { ...state, isLoading: false, data: [...state.data, payload.result], ...r }
		case `${types.UPDATE}_${types.SUCCESS}`:
			return { ...state, isLoading: false, ...r }
		case types.FAILURE:
			return { ...state, isLoading: false, error: payload }
		// case 'FILTER_UPDATE':
		// 	return {
		// 		...state,
		// 		filtering: { ...state.filtering, ...payload },
		// 	}
		// case 'SORT_UPDATE':
		// 	return {
		// 		...state,
		// 		sorting: payload,
		// 		// ['year:ASC', 'name:DESC']
		// 		// [{ field: 'year', flow: 'ASC' }, { field: 'name', flow: 'DESC' }]
		// 		//
		// 	}
		case types.RESET:
			return initialState
		default:
			return state
	}
}
