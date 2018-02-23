import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { SAN_FRANCISCO, LOS_ANGELES, SAN_DIEGO, CHANGE_CITY } from './../../ducks/city';


class App extends Component {

    render() {
        const { changeCity, value } = this.props;
        return (
            <div>
                <Link to="/city/San_Francisco">
                    <button onClick={() => changeCity('San_Francisco')}>SAN_FRANCISCO</button>
                </Link>
                <Link to="/city/Los_Angeles">
                    <button onClick={() => changeCity('Los_Angeles')}>LOS_ANGELES</button>
                </Link>
                <Link to="/city/San_Diego">
                    <button onClick={() => changeCity('San_Diego')}>SAN_DIEGO</button>
                </Link>
                <p>{value}</p>
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
