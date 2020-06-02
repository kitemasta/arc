import { getEntitySelector, getOneEntitySelector } from '../helpers/redux/selectors'
import { BRANDS } from '../common/const'

export const getBrandsSelector = getEntitySelector(BRANDS)
export const getBrandSelector = getOneEntitySelector(BRANDS)
