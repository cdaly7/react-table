import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLocations } from './actions/locations.js'
import { setBuildingTypes } from './actions/building-types.js';
import * as filterActions from './actions/filters.js'
import RemineTable from './components/Table/RemineTable/RemineTable';
import remineApi from './API.js';
import locations from './selectors/locations';
import buildingTypes from './selectors/building-types';
import filters from './selectors/filters';

const ANY = 'Any';

class InterviewTestContainer extends Component {
    
    constructor(props) {
        super(props);

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
            if (event.target.checked) {
                this.props.store.dispatch(filterActions.addBuildingTypeFilter(Number(event.target.value)));
            } else {
                this.props.store.dispatch(filterActions.removeBuildingTypeFilter(Number(event.target.value)));
            }
        }
    }
      
    componentDidMount() {
        // Getting all locations current avialble on market
        remineApi.getLocations().then((result) => {
            this.props.store.dispatch(setLocations(result.data));
        });

        // Getting all building types
        remineApi.getBuildingTypes().then((result) => {
            this.props.store.dispatch(setBuildingTypes(result.data));
        })
    }
    
    render() {
        return (
            <div className="interviewTestContainer">
                <div className="filterContainer">
                    <div className="bedroom-filter">
                        <label>Number Of Bedrooms</label>
                        <div>
                            <span>Min:</span>
                            <input min="0" 
                                type="number" 
                                name="bedLow" 
                                onChange={this.handleBedLowChange}/>
                        </div>
                        <div>
                            <span>Max:</span>
                            <input min="0" 
                                type="number" 
                                name="bedHigh" 
                                onChange={this.handleBedHighChange}/>
                        </div>    
                    </div>
                    <div className="bathroom-filter">
                        <label>Bathrooms</label>
                        <div>
                        <span>Min:</span>
                        <input min="0" 
                            type="number" 
                            name="bathLow" 
                            onChange={this.handleBathLowChange}/>
                        </div>
                       <div>
                       <span>Max:</span>
                        <input min="0" 
                            type="number" 
                            name="bathHigh"   
                            onChange={this.handleBathHighChange}/>
                       </div>
                    </div>               
                    <div className="building-filter">
                        <label>Building Type:</label>
                        {this.props.buildingTypes.map(property => (
                                <span>
                                    <input 
                                    type="checkbox"
                                    checked={this.props.buildingTypesFilters[property.id]}
                                    key={property.id}
                                    value={property.id}
                                    onChange={this.handleBuildingTypeChange}/>
                                    {property.name}
                                </span>           
                            ))}
                    </div>
                </div>
                <RemineTable properties={this.props.data} />
            </div>
        );
    }
}

// start of code change
const mapStateToProps = (state) => {
    return { 
        data: locations.filteredLocations(state),
        buildingTypes: buildingTypes.data(state),
        buildingTypesFilters: filters.buildingTypes(state)
     };
};
  
export default connect(mapStateToProps)(InterviewTestContainer);
