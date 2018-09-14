export const SET_BUILDING_TYPES = 'SET_BUILDING_TYPES';

/**
 * @param {Array} payload
 * @returns {Object}
 */
export function setBuildingTypes(payload) {
    return { type: SET_BUILDING_TYPES, payload }
}