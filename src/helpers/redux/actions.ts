import { createAction } from 'redux-actions'
import { get } from 'lodash'
import * as types from '../../common/const'
import { actionsByEntityMap } from '../../actions'

// create REQUEST, SUCCESS, FAILURE, RESET action for passed entity such as 'user' etc.

const actionTypes = [types.REQUEST, types.SUCCESS, types.FAILURE, types.RESET]

export const createEntityActions = (entity: string) =>
	actionTypes.reduce((acc: any, type) => {
		acc[type] = (payload: any, meta: any) =>
			createAction(
				`${entity.toUpperCase()}_${type}`,
				_ => payload,
				() => {
					const metaStoreField = get(meta, 'storeField')
					return metaStoreField
						? { entity, ...meta, [metaStoreField]: payload }
						: { entity, ...meta }
				}
			)()
		return acc
	}, {})

export const entityRequestType = (entity: string) => actionsByEntityMap[entity].REQUEST().type
