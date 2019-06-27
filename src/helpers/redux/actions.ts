import { createAction as CA } from 'redux-actions'

export const createAction = (type: string, payload?: any, meta?: any) =>
	CA(type, payload, meta)
