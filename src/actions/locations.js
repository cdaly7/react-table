export const SET_LOCATIONS = 'SET_LOCATIONS'

/**
 * @param {Array} payload
 * @returns {Object}
 */
export function setLocations(payload) {
    return { type: SET_LOCATIONS, payload }
}