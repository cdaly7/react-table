/**
 * @param {Object} state 
 * @returns {Number}
 */
const bedsLow = state => state.filters.bedsLow

/**
 * @param {Object} state 
 * @returns {Number}
 */
const bedsHigh = state => state.filters.bedsHigh

/**
 * @param {Object} state 
 * @returns {Number}
 */
const bathsLow = state => state.filters.bathsLow

/**
 * @param {Object} state 
 * @returns {Number}
 */
const bathsHigh = state => state.filters.bathsHigh

/**
 * @param {Object} state 
 * @returns {String}
 */
const buildingType = state => state.filters.buildingType
        
export default {
  bedsLow,
  bedsHigh,
  bathsLow,
  bathsHigh,
  buildingType
}