export const SET_BEDS_LOW_FILTER = 'SET_BEDS_HIGH_FILTER'
export const SET_BEDS_HIGH_FILTER = 'SET_BEDS_LOW_FILTER'
export const SET_BATHS_LOW_FILTER = 'SET_BATHS_LOW_FILTER'
export const SET_BATHS_HIGH_FILTER = 'SET_BATHS_HIGH_FILTER'
export const SET_BUILDING_TYPE_FILTER = 'SET_BUILDING_TYPE_FILTER'

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
export function setBuildingTypeFilter(payload) {
    return { type: SET_BUILDING_TYPE_FILTER, payload }
}