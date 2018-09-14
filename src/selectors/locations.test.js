import locations from './locations';

const locationList = [
    {
        baths: 3,
        beds: 0,
        buildingType: {
            id: 5, 
            name: "singleFamily"
        }
    },
    {
        baths: 3,
        beds: 0,
        buildingType: {
            id: 2, 
            name: "condo"
        }
    },
    {
        baths: 2,
        beds: 2,
        buildingType: {
            id: 2, 
            name: "condo"
        }
    },
    {
        baths: 4,
        beds: 1,
        buildingType: {
            id: 2, 
            name: "condo"
        }
    }
];

describe('selectors/locations.js', function() {
    describe('data', function() {
        test('empty data, should return the state.locations', () => {
            let state = {
                locations: []
            }
            expect(locations.data(state)).toEqual(state.locations);
        });
        
        test('with data, should return the state.locations', () => {
            let state = {
                locations: locationList
            }
            expect(locations.data(state)).toEqual(state.locations);
        });
    })

    describe('filteredLocations', function() {
        beforeEach(function () { 
            var state = {
                filters: {
                    bedsLow: 0,
                    bedsHigh: null,
                    bathsLow: 0,
                    bathsHigh: null,
                    buildingType: 0
                },
                locations: locationList                 
            }
        })

        test('with default filters should return all locations', () => {
            let state = {
                filters: {
                    bedsLow: 0,
                    bedsHigh: null,
                    bathsLow: 0,
                    bathsHigh: null,
                    buildingType: 0
                },
                locations: locationList                 
            }
            expect(locations.filteredLocations(state)).toEqual(locationList);
        });

        test('with beds and bathroom filter set should return only 1 items', () => {
            let state = {
                filters: {
                    bedsLow: 2,
                    bedsHigh: 2,
                    bathsLow: 1,
                    bathsHigh: 3,
                    buildingType: 0
                },
                locations: locationList                 
            }
            expect(locations.filteredLocations(state)).toEqual([
                {
                    baths: 2,
                    beds: 2,
                    buildingType: {
                        id: 2, 
                        name: "condo"
                    }
                }
            ]);
        });

        test('with buildingType filter set should return 3 items', () => {
            let state = {
                filters: {
                    bedsLow: 0,
                    bedsHigh: null,
                    bathsLow: 0,
                    bathsHigh: null,
                    buildingType: 2
                },
                locations: locationList                 
            }
            expect(locations.filteredLocations(state)).toEqual([
                {
                    baths: 3,
                    beds: 0,
                    buildingType: {
                        id: 2, 
                        name: "condo"
                    }
                },
                {
                    baths: 2,
                    beds: 2,
                    buildingType: {
                        id: 2, 
                        name: "condo"
                    }
                },
                {
                    baths: 4,
                    beds: 1,
                    buildingType: {
                        id: 2, 
                        name: "condo"
                    }
                }
            ]);
        });
    })
})
