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
        test('with default filters should return all locations', () => {
            let state = {
                filters: {
                    bedsLow: 0,
                    bedsHigh: null,
                    bathsLow: 0,
                    bathsHigh: null,
                    buildingTypes: {
                        1: true,
                        2: true,
                        3: true,
                        4: true,
                        5: true
                    }
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
                    buildingTypes: {
                        1: true,
                        2: true,
                        3: true,
                        4: true,
                        5: true
                    }
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
                    buildingTypes: {
                        1: false,
                        2: true,
                        3: false,
                        4: false,
                        5: false
                    }
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
