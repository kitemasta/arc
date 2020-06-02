import { combineReducers } from 'redux'
import entityReducer from './entityReducer'
import metaReducer from './metaReducer'

export default combineReducers({
	meta: metaReducer,
	entities: entityReducer,
})
