import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppInputSearch from './AppInputSearch';
import _ from 'lodash';

const url = 'http://autocomplete.wunderground.com/aq?query=';

class AppInputSearchContainer extends Component {

    constructor() {
        super();

        this.state = {
            searchedCities: null,
            isRequesting: true,
            value: ''
        };

        this.requestSuggestions = _.debounce(this.requestSuggestions, 1000);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {value} = event.target;
        this.setState({
            value
        });
        this.requestSuggestions(value);
    }

    async requestSuggestions(city) {

        const requestUrl = url + city;

        this.setState({
            isRequesting: true
        });

        try {
            const response = await fetch(requestUrl);
            const parseResponse = await response.json();
            console.log('parseResponseCItyCOntainer', parseResponse);
            const parsed = this.parseResponse(parseResponse.RESULTS);

            this.setState({
                searchedCities: parsed,
                isRequesting: false
            })
        }
        catch (error) {
            console.log('there was an error', error)
        }
    }

    countryToState(){
        //todo replace US for state AL,AK
    }

    parseResponse(response) {
        const searchedCities = [];

        response.map(element => {
            searchedCities.push({
                name: element.name,
                stateAbbreviation: element.c
            })
        });

        return searchedCities;
    }


    render() {
        const {
            searchedCities,
            value,
            isRequesting
        } = this.state;

        return (
            <AppInputSearch
                searchedCities={searchedCities}
                value={value}
                handleInputChange={this.handleChange}
                isRequesting={isRequesting} 
                placeholder="name of the city you want to search for"
                />

        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.city
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeCity: (value) => {
            dispatch({
                type: CHANGE_CITY,
                payload: {
                    value
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputSearchContainer);
