import { combineReducers } from 'redux'
import { createReducersFromEntities } from '../helpers/entities'
import { createMetaReducer } from '../helpers/redux/reducers/createMetaReducer'

export default combineReducers(createReducersFromEntities(createMetaReducer))
