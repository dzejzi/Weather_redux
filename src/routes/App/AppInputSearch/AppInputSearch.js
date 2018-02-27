import React, { Component } from 'react';
import Loader from '../../../components/Loader'

class AppInputSearch extends Component {

    constructor(props) {
        super(props)
    }

    parseCitiesToComponents(searchedCities) {
        if (!searchedCities) {
            return
        }
        const listItems = searchedCities.map( city =>
            <li key={city.name + city.stateAbbreviation}>
                {city.name} {city.stateAbbreviation}
            </li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    render() {
        const { value, handleInputChange, searchedCities, isRequesting } = this.props;
        const parsedCities = this.parseCitiesToComponents(searchedCities);


        console.log(searchedCities);
        return (
            <div>
                <input type="text" value={value} onChange={handleInputChange} />
                {isRequesting && (<Loader />)}
                {!isRequesting && parsedCities}

            </div>
        )
    }
}


export default AppInputSearch