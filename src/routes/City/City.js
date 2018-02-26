import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './City.scss';
import SvgIcon from '../../components/SvgIcon';
import backArrowIcon from '../../resources/left-arrow.svg';
import Loader from '../../components/Loader/Loader';


const City = ({
    isRequestingInitialData,
    city,
    country,
    stateName,
    temperature,
    icon,
    iconUrl,
    localTime
}) => {
    return (
        <div>
            {isRequestingInitialData && (<Loader />)}
            {!isRequestingInitialData && (
                <div className="City">
                    <h1>{city} {country} {stateName}</h1>
                    <table className="description">
                        <tbody>
                            <tr>
                                <td>temperature: </td>
                                <td>{temperature}&deg; C</td>
                            </tr>
                            <tr>
                                <td>{icon}</td>
                                <td><img src={iconUrl} width="100"></img></td>
                            </tr>
                            <tr>
                                <td>local time:</td>
                                <td> {localTime}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="City__iconWrapper">
                        <Link to='/'>
                            <SvgIcon src={backArrowIcon} className="City__iconWrapper__icon" />
                        </Link>
                    </div>
                </div>

            )}

        </div>
    )
}

export default City;