import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Loader from '../../../components/Loader';
import Button from '../../../components/Button';

class AppInputSearch extends Component {

    constructor(props) {
        super(props)
    }

    parseCitiesToComponents(searchedCities) {
        if (!searchedCities) {
            return
        }
        const listItems = searchedCities.map(city =>
            <Link
                to={this.createPath(city.name, city.stateAbbreviation)}
                key={city.name + city.stateAbbreviation}
            >
                <li key={city.name + city.stateAbbreviation}>
                    <Button>
                        {city.name} {city.stateAbbreviation}
                    </Button>
                </li>
            </Link>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    createPath(name, state) {
        const newName = name.split(',');
        const cityName = newName[0].replace(/ /g,'_');
        const path = `/city/${state}/${cityName}`;
        return path
    }

    render() {
        const { value, handleInputChange, searchedCities, isRequesting, placeholder } = this.props;
        const parsedCities = this.parseCitiesToComponents(searchedCities);

        return (
            <div className="AppInputSearch">
                <input type="text" value={value} onChange={handleInputChange} className="AppInputSearch__input" placeholder={placeholder} />
                {(isRequesting && value.length > 0) && (<Loader />)}
                {!isRequesting && parsedCities}
            </div>
        )
    }
}


export default AppInputSearch