import { get } from 'lodash'
import * as types from '../../common/const'

export const toCommonType = (state: any) => (next: any) => (action: any) => {
	const isRequestOrFailure =
		action.type.includes(types.REQUEST) || action.type.includes(types.FAILURE)
	const splited = action.type.split('_')

	next({
		...action,
		type: isRequestOrFailure ? splited[2] : `${splited[0]}_${splited[2]}`,
	})
}

export const entityTypeApiPefix = (state: any) => (next: any) => (action: any) =>
	next({
		...action,
		type: get(action, 'meta.method') ? `${action.meta.method}_${action.type}` : action.type,
	})
