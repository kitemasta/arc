import { API } from './api'
import { fetchSaga } from './redux/sagas'

// users
export const getUsers = () => fetchSaga('users', API.get('/users'))

// cars
export const getCars = () => fetchSaga('cars', API.get('/cars'))
