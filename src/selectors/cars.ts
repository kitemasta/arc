import { getEntitySelector } from '../helpers/redux/selectors'
import { CARS } from '../common/const'

export const getCarsSelector = getEntitySelector(CARS)
