import { combineReducers } from 'redux'
import { createReducersFromEntities } from './../helpers/entities'
import { createEntityReducer } from '../helpers/redux/reducers/createEntityReducer'

export default combineReducers(createReducersFromEntities(createEntityReducer))
