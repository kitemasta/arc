import React, { FC } from 'react'
import { connect } from 'react-redux'
import { login } from './actions/auth'
import { getUsersSelector, getUserSelector } from './selectors/users'

interface AppProps {
	login: () => void
	users: any
	user: any
}

const App: FC<AppProps> = ({ login, users, user }) => {
	const loginHandler = () => {
		login()
	}
	return (
		<div className="App">
			<button onClick={loginHandler}>Click</button>
		</div>
	)
}

const mapStateToProps = (state: any) => ({
	users: getUsersSelector(state),
	user: getUserSelector(state, 2),
})

export default connect(
	mapStateToProps,
	{ login }
)(App)
