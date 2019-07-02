import * as types from './../common/const'

export const login = () => ({
	type: types.LOGIN,
	meta: {
		entity: types.USERS,
	},
})
