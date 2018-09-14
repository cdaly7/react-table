import { SET_LOCATIONS } from '../actions/locations';

const locations = (state = [], action) => {
    switch (action.type) {
        case SET_LOCATIONS:
            return action.payload
        default:
            return state
    }
}

export default locations