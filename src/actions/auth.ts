import { LOGIN } from './../common/const'

export const login = () => ({
	type: LOGIN,
	meta: {
		entity: 'auth',
	},
})
