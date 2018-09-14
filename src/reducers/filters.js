import * as filterActions from '../actions/filters';
import { SET_BUILDING_TYPES } from '../actions/building-types';

const defaultState = {
    bedsLow: 0,
    bedsHigh: null,
    bathsLow: 0,
    bathsHigh: null,
    buildingTypes: {}
};

const setBuildingTypes = (allBuildingTypes) => {
    return allBuildingTypes.reduce(function(accum, current) {
        accum[current.id] = true;
        return accum;
    }, {})
}

const addBuildingType = (previousState, type) => {
    let newState = Object.assign({}, previousState);
    newState[type] = true;
    return newState;
};

const removeBuildingType = (previousState, type) => {
    let newState = Object.assign({}, previousState);
    newState[type] = false;
    return newState;
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
        case SET_BUILDING_TYPES:
            return Object.assign({}, state, {
                buildingTypes: setBuildingTypes(action.payload)
            });
        case filterActions.ADD_BUILDING_TYPE_FILTER:
            return Object.assign({}, state, {
                buildingTypes: addBuildingType(state.buildingTypes, action.payload)
        });
        case filterActions.REMOVE_BUILDING_TYPE_FILTER:
            return Object.assign({}, state, {
                buildingTypes: removeBuildingType(state.buildingTypes, action.payload)
        });
        default:
            return state
    }
}

export default visibilityFilter