import buildingTypes from './building-types';

describe('selectors/buildingTypes.js', function() {
    describe('data', function() {
        test('empty data, should return the state.buildingTypes', () => {
            let state = {
                buildingTypes: []
            }
            expect(buildingTypes.data(state)).toEqual(state.buildingTypes);
        });
        
        test('with data, should return the state.buildingTypes', () => {
            let state = {
                buildingTypes: [{
                    id: 'foo',
                    name: 'bar'
                }]
            }
            expect(buildingTypes.data(state)).toEqual(state.buildingTypes);
        });
    })

    describe('combinedBuildingTypes', function() {
        test('empty data, should return Array with "Any" object', () => {
            let state = {
                buildingTypes: []
            }
            expect(buildingTypes.combinedBuildingTypes(state)).toEqual([{
                id: 0,
                name: 'Any'
            }]);
        });
        
        test('with data, should return Array with "Any" object and data', () => {
            let state = {
                buildingTypes: [{
                    id: 1,
                    name: 'foo'
                }]
            }
            expect(buildingTypes.combinedBuildingTypes(state)).toEqual([
                {
                    id: 0,
                    name: 'Any'
                },
                {
                    id: 1,
                    name: 'foo'
                },
            ]);        
        });
    })
})
