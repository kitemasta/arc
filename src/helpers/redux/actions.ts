import { createAction } from 'redux-actions'
import * as types from '../../common/const'

// create REQUEST, SUCCESS, FAILURE, RESET action for passed entity such as 'user' etc.

const actionTypes = [types.REQUEST, types.SUCCESS, types.FAILURE, types.RESET]

export const createEntityActions = (entity: string) =>
	actionTypes.reduce((acc: any, type) => {
		acc[type] = (payload: any, meta: any) =>
			createAction(`${entity.toUpperCase()}_${type}`, _ => payload, () => ({ entity, ...meta }))()
		return acc
	}, {})
