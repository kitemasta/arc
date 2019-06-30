import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import App from './App'
import rootSaga from './sagas'
import { entityTypeToCommon } from './helpers/redux/middlewares'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware, logger, entityTypeToCommon))
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
