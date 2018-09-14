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
})
