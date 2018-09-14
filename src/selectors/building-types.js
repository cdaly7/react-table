import { createSelector } from 'reselect';

const ANY = 'Any';

/**
 * @param {Object} state 
 * @returns {Array}
 */
const data = state => state.buildingTypes

/**
 * @type {Object}
 */
const ANY_OBJECT = {
    id: 0,
    name: ANY
};

/**
 * @param {Array} buildingTypes
 * @returns {Array}
 */
const getCombinedBuildingTypes = (buildingTypes) => {
    return [ANY_OBJECT].concat(buildingTypes);
};

/**
 * @param {Object} state
 * @returns {Array}
 */
const combinedBuildingTypes = createSelector(
    data,
    getCombinedBuildingTypes
);

export default {
    combinedBuildingTypes,
    data
}