import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLocations } from './actions/locations.js'
import * as filterActions from './actions/filters.js'
import RemineTable from './components/Table/RemineTable/RemineTable';
import remineApi from './API.js';
import locations from './selectors/locations';

const ANY = 'Any';

class InterviewTestContainer extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            buildingTypes: [],
            bedroomLow: 0,
            bedroomHigh: 1,
            bathroomLow: 0,
            bathroomHigh: 1
        };

        this.handleBedLowChange = (event) => {
            this.props.store.dispatch(filterActions.setBedsLowFilter(Number(event.target.value)));
        }

        this.handleBedHighChange = (event) => {
            this.props.store.dispatch(filterActions.setBedsHighFilter(Number(event.target.value)));
        }
        
        this.handleBathLowChange = (event) => {
            this.props.store.dispatch(filterActions.setBathsLowFilter(Number(event.target.value)));
        }
        
        this.handleBathHighChange = (event) => {
            this.props.store.dispatch(filterActions.setBathsHighFilter(Number(event.target.value)));
        }
        
        this.handleBuildingTypeChange = (event) => {
            this.props.store.dispatch(filterActions.setBuildingTypeFilter(event.target.value));
        }
    }
      
    componentDidMount() {
        // Getting all locations current avialble on market
        remineApi.getLocations().then((result) => {
            this.props.store.dispatch(setLocations(result.data));
        });

        // Getting all building types
        remineApi.getBuildingTypes().then((result) => {
            this.setState({buildingTypes: result.data})
        })
    }
    
    render() {
        return (
            <div className="interviewTestContainer">
                <div className="filterContainer">
                    <div>
                        <label>Number Of Bedrooms</label>
                        <div>
                            <span>Minimum</span>
                            <input min="0" 
                                type="number" 
                                name="bedLow" 
                                onChange={this.handleBedLowChange}/>
                        </div>
                        <div>
                            <span>Maximum</span>
                            <input min="0" 
                                type="number" 
                                name="bedHigh" 
                                onChange={this.handleBedHighChange}/>
                        </div>    
                    </div>
                    <div>
                        <label>Bathrooms</label>
                        <div>
                        <span>Minimum</span>
                        <input min="0" 
                            type="number" 
                            name="bathLow" 
                            onChange={this.handleBathLowChange}/>
                        </div>
                       <div>
                       <span>Maximum</span>
                        <input min="0" 
                            type="number" 
                            name="bathHigh" 
                            
                            onChange={this.handleBathHighChange}/>
                       </div>
                    </div>               
                    <div>
                        <label>Building Type:</label>
                        <select onChange={this.handleBuildingTypeChange}>
                            <option value={ANY}>{ANY}</option>
                            {this.state.buildingTypes.map(property => (
                                <option key={property.id} value={property.name}>{property.name}</option>
                            ))}
                        ))}
                        </select>
                    </div>
                    </div>
                <RemineTable properties={this.props.data} />
            </div>
        );
    }
}

// start of code change
const mapStateToProps = (state) => {
    return { data: locations.filteredLocations(state) };
};
  
export default connect(mapStateToProps)(InterviewTestContainer);
