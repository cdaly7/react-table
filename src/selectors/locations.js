import { createSelector } from 'reselect';
import filtersSelectors from './filters.js';

/**
 * @param {Array} locations 
 * @param {Number} bedroomLow 
 * @param {Number} bedroomHigh 
 * @param {Number} bathroomLow 
 * @param {Number} bathroomHigh 
 * @param {Object} types
 * @returns {Array}
 */
const getfilteredLocations = (locations = [], bedroomLow = 0, bedroomHigh, bathroomLow = 0, bathroomHigh, types = {}) => {
  return locations.filter(location => {
      if (location.beds < bedroomLow || location.baths < bathroomLow) {
          return null;
      }
      if (bathroomHigh && bathroomHigh < location.baths) {
          return null;
      }
      if (bedroomHigh && bedroomHigh < location.beds) {
          return null;
      }
      if (!types[location.buildingType.id]) {
          return null;
      }
      return location;
  });
};

/**
 * @param {Object} state 
 * @returns {Array}
 */
const data = state => state.locations;

/**
 * @param {Object} state
 * @returns {Array}
 */
const filteredLocations = createSelector(
  data,
  filtersSelectors.bedsLow,
  filtersSelectors.bedsHigh,
  filtersSelectors.bathsLow,
  filtersSelectors.bathsHigh,
  filtersSelectors.buildingTypes,
  getfilteredLocations
);

export default {
  filteredLocations,
  data
}