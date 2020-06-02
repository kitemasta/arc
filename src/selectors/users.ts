import { getEntitySelector, getOneEntitySelector } from '../helpers/redux/selectors'
import { USERS } from '../common/const'

export const getUsersSelector = getEntitySelector(USERS)
export const getUserSelector = getOneEntitySelector(USERS)
