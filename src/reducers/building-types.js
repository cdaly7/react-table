import { SET_BUILDING_TYPES } from '../actions/building-types';

const buildingTypes = (state = [], action) => {
    switch (action.type) {
        case SET_BUILDING_TYPES:
            return action.payload;
        default:
            return state;
    }
}

export default buildingTypes