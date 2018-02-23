import React, { Component } from 'react';
import CityContainer from '../containers/CityContainer';


const City = (props) => {
    return (
        <CityContainer city={props.match.params.name}/>
    )
}

export default City;