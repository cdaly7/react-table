export const SET_BEDS_LOW_FILTER = 'SET_BEDS_HIGH_FILTER'
export const SET_BEDS_HIGH_FILTER = 'SET_BEDS_LOW_FILTER'
export const SET_BATHS_LOW_FILTER = 'SET_BATHS_LOW_FILTER'
export const SET_BATHS_HIGH_FILTER = 'SET_BATHS_HIGH_FILTER'
export const ADD_BUILDING_TYPE_FILTER = 'ADD_BUILDING_TYPE_FILTER'
export const REMOVE_BUILDING_TYPE_FILTER = 'REMOVE_BUILDING_TYPE_FILTER'

/**
 * @param {Number} payload
 * @returns {Object}
 */
export function setBedsLowFilter(payload) {
    return { type: SET_BEDS_LOW_FILTER, payload }
}

/**
 * @param {Number} payload
 * @returns {Object}
 */
export function setBedsHighFilter(payload) {
    return { type: SET_BEDS_HIGH_FILTER, payload }
}

/**
 * @param {Number} payload
 * @returns {Object}
 */
export function setBathsLowFilter(payload) {
    return { type: SET_BATHS_LOW_FILTER, payload }
}

/**
 * @param {Number} payload
 * @returns {Object}
 */
export function setBathsHighFilter(payload) {
    return { type: SET_BATHS_HIGH_FILTER, payload }
}

/**
 * @param {String} payload
 * @returns {Object}
 */
export function addBuildingTypeFilter(payload) {
    return { type: ADD_BUILDING_TYPE_FILTER, payload }
}

/**
 * @param {String} payload
 * @returns {Object}
 */
export function removeBuildingTypeFilter(payload) {
    return { type: REMOVE_BUILDING_TYPE_FILTER, payload }
}