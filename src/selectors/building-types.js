import { createSelector } from 'reselect';

const ANY = 'Any';

/**
 * @param {Object} state 
 * @returns {Array}
 */
const buildingTypes = state => state.buildingTypes

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
    buildingTypes,
    getCombinedBuildingTypes
);

export default {
    combinedBuildingTypes,
    buildingTypes
}