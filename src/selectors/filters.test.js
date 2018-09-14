import filters from './filters';

const state = {
    filters: {
        bedsLow: 0,
        bedsHigh: 2,
        bathsLow: 1,
        bathsHigh: 9,
        buildingTypes: {
            1: true,
            2: true,
            3: true,
            4: true,
            5: true
        }  
    }
};

describe('selectors/filters', function() {
    describe('bedsLow', function() {
        test('should return the state.bedsLow', () => {
            expect(filters.bedsLow(state)).toEqual(state.filters.bedsLow);
        });
    });

    describe('bedsHigh', function() {
        test('should return the state.bedsHigh', () => {
            expect(filters.bedsHigh(state)).toEqual(state.filters.bedsHigh);
        });
    });

    describe('bathsLow', function() {
        test('should return the state.bathsLow', () => {
            expect(filters.bathsLow(state)).toEqual(state.filters.bathsLow);
        });
    });

    describe('bathsHigh', function() {
        test('should return the state.bathsHigh', () => {
            expect(filters.bathsHigh(state)).toEqual(state.filters.bathsHigh);
        });
    });

    describe('buildingTypes', function() {
        test('should return the state.buildingTypes', () => {
            expect(filters.buildingTypes(state)).toEqual(state.filters.buildingTypes);
        });
    });
})
