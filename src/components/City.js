import React, { Component } from 'react';

const City = (props) =>{
    console.log(props)
    return (
    <div>City {props.match.params.name}</div>
)
}

export default City;