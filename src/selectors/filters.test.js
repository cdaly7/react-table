import filters from './filters';

const state = {
    filters: {
        bedsLow: 0,
        bedsHigh: 2,
        bathsLow: 1,
        bathsHigh: 9,
        buildingType: 0  
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

    describe('buildingType', function() {
        test('should return the state.buildingType', () => {
            expect(filters.buildingType(state)).toEqual(state.filters.buildingType);
        });
    });
})
