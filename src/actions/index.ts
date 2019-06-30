import { createEntityActions } from './../helpers/redux/actions'
import { ENTITIES } from '../common/const'

export const actionsByEntityMap = ENTITIES.reduce((acc: any, entity) => {
	acc[entity] = createEntityActions(entity)
	return acc
}, {})
