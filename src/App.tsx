import React, { FC } from 'react'
import { connect } from 'react-redux'
import { login } from './actions/auth'

interface AppProps {
	login: (id: number) => void
}

const App: FC<AppProps> = ({ login }) => {
	const loginHandler = () => {
		login(1)
	}
	return (
		<div className="App">
			<button onClick={loginHandler}>Click</button>
		</div>
	)
}

const mapStateToProps = ({ entities }: any) => ({
	entities,
})

export default connect(
	mapStateToProps,
	{ login }
)(App)
