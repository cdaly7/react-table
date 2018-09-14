import { combineReducers } from 'redux'
import locations from './locations'
import filters from './filters'

export default combineReducers({
    locations,
    filters
})