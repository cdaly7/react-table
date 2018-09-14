import * as filterActions from '../actions/filters';

const defaultState = {
    bedsLow: 0,
    bedsHigh: null,
    bathsLow: 0,
    bathsHigh: null,
    buildingType: 0   
};

const visibilityFilter = (state = defaultState, action) => {
    switch (action.type) {
        case filterActions.SET_BEDS_LOW_FILTER:
            return Object.assign({}, state, {
                bedsLow: action.payload
            });
        case filterActions.SET_BEDS_HIGH_FILTER:
            return Object.assign({}, state, {
                bedsHigh: action.payload
            });
        case filterActions.SET_BATHS_LOW_FILTER:
            return Object.assign({}, state, {
                bathsLow: action.payload
            });
        case filterActions.SET_BATHS_HIGH_FILTER:
            return Object.assign({}, state, {
                bathsHigh: action.payload
        });
        case filterActions.SET_BUILDING_TYPE_FILTER:
            return Object.assign({}, state, {
                buildingType: action.payload
        });
        default:
            return state
    }
}

export default visibilityFilter