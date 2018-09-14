import { SET_BEDS_LOW_FILTER, SET_BEDS_HIGH_FILTER, SET_BATHS_LOW_FILTER, SET_BATHS_HIGH_FILTER, SET_BUILDING_TYPE_FILTER } from '../actions/filters';

const defaultState = {
    bedsLow: 0,
    bedsHigh: null,
    bathsLow: 0,
    bathsHigh: null,
    buildingType: 'Any'   
};

const visibilityFilter = (state = defaultState, action) => {
    switch (action.type) {
        case SET_BEDS_LOW_FILTER:
            return Object.assign({}, state, {
                bedsLow: action.payload
            });
        case SET_BEDS_HIGH_FILTER:
            return Object.assign({}, state, {
                bedsHigh: action.payload
            });
        case SET_BATHS_LOW_FILTER:
            return Object.assign({}, state, {
                bathsLow: action.payload
            });
        case SET_BATHS_HIGH_FILTER:
            return Object.assign({}, state, {
                bathsHigh: action.payload
        });
        case SET_BUILDING_TYPE_FILTER:
            return Object.assign({}, state, {
                buildingType: action.payload
        });
        default:
            return state
    }
}

export default visibilityFilter