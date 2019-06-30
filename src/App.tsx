import React, { FC } from 'react'
import { connect } from 'react-redux'
import { login } from './actions/auth'

interface AppProps {
	login: (id: number) => void
	auth: any
}

const App: FC<AppProps> = ({ login, auth }) => {
	const loginHandler = () => {
		login(1)
	}
	return (
		<div className="App">
			<button onClick={loginHandler}>Click</button>
			<h1>{`${auth.isLoading}`}</h1>
		</div>
	)
}

const mapStateToProps = ({ auth }: any) => ({
	auth,
})

export default connect(
	mapStateToProps,
	{ login }
)(App)
