import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { SAN_FRANCISCO, LOS_ANGELES, SAN_DIEGO, CHANGE_CITY } from './../../ducks/city';
import './App.scss';
import cloudIcon from '../../resources/cloud.svg';
import SvgIcon from '../../components/SvgIcon';
import Button from '../../components/Button'

class App extends Component {

    render() {
        const { changeCity, value } = this.props;
        return (
            <div className="weatherApp">
                <h1>What's the weather like?</h1>
                <ul>
                    <Link to="/city/San_Francisco">
                        <li >
                            <Button onClick={() => changeCity('San_Francisco')}>
                                San Francisco
                            </Button>
                        </li>
                    </Link>

                    <Link to="/city/Los_Angeles">
                        <li >
                            <Button onClick={() => changeCity('Los_Angeles')}>
                                Los Angeles
                            </Button>
                        </li>
                    </Link>
                    <Link to="/city/San_Diego">
                        <li >
                            <Button onClick={() => changeCity('San_Diego')}>
                                San Diego
                            </Button>
                        </li>
                    </Link>

                </ul>
                <div className="clouds">
                    <SvgIcon src={cloudIcon} className="icon" />
                    <SvgIcon src={cloudIcon} className="icon" />
                    <SvgIcon src={cloudIcon} className="icon" />
                </div>


                {/* <p>{value}</p>*/}
            </div>
        )
    }

}

function mapStateToProps(state) {
    // console.log(state)
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
