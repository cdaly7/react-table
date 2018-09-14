import { createSelector } from 'reselect'
import filtersSelectors from './filters.js'

const ANY = 'Any';

/**
 * @param {Array} locations 
 * @param {Number} bedroomLow 
 * @param {Number} bedroomHigh 
 * @param {Number} bathroomLow 
 * @param {Number} bathroomHigh 
 * @param {String} type 
 * @returns {Array}
 */
const getfilteredLocations = (locations = [], bedroomLow = 0, bedroomHigh, bathroomLow = 0, bathroomHigh, type = ANY) => {
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
      if (type !== ANY && type !== location.buildingType.name) {
          return null;
      }
      return location;
  });
}

/**
 * @param {Object} state 
 * @returns {Array}
 */
const locations = state => state.locations

/**
 * @param {Object} state
 * @returns {Array}
 */
const filteredLocations = createSelector(
  locations,
  filtersSelectors.bedsLow,
  filtersSelectors.bedsHigh,
  filtersSelectors.bathsLow,
  filtersSelectors.bathsHigh,
  filtersSelectors.buildingType,
  getfilteredLocations
);

export default {
  filteredLocations,
  locations
}