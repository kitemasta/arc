import React, { FC } from 'react'
import { connect } from 'react-redux'
import { login } from './actions/auth'
import { getUsersSelector, getUserSelector } from './selectors/users'
import { getCarsSelector, getCarSelector } from './selectors/cars'
import { getBrandsSelector, getBrandSelector } from './selectors/brands'

interface AppProps {
	login: () => void
	users: any
	user: any
	car: any
	cars: any
	brands: any
	brand: any
}

const App: FC<AppProps> = ({ login, users, user, cars, car, brands, brand }) => {
	const loginHandler = () => {
		login()
	}
	return (
		<div className="App">
			<button onClick={loginHandler}>Сделать приятно</button>
			<button>Еще</button>
		</div>
	)
}

const mapStateToProps = (state: any) => ({
	users: getUsersSelector(state),
	user: getUserSelector(state, 2),
	cars: getCarsSelector(state),
	car: getCarSelector(state, 1),
	brands: getBrandsSelector(state),
	brand: getBrandSelector(state, 1),
})

export default connect(
	mapStateToProps,
	{ login }
)(App)
