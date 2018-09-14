import { combineReducers } from 'redux';
import buildingTypes from './building-types';
import filters from './filters';
import locations from './locations';

export default combineReducers({
    buildingTypes,
    filters,
    locations,
})