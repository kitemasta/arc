import { getEntitySelector, getOneEntitySelector } from '../helpers/redux/selectors'
import { CARS } from '../common/const'

export const getCarsSelector = getEntitySelector(CARS)
export const getCarSelector = getOneEntitySelector(CARS)
