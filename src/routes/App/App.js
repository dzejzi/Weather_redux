import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { RED, GREEN, CHANGE_COLOR } from './../../ducks/color';


class App extends Component {

    render() {
        const { changeColor, value } = this.props;
        return (
            <div>
                <Link to="/city/red">
                    <button onClick={() => changeColor('red')}>RED</button>
                </Link>
                <Link to="/city/green">
                    <button onClick={() => changeColor('green')}>GREEN</button>
                </Link>
                <Link to="/city/blue">
                    <button onClick={() => changeColor('blue')}>BLUE</button>
                </Link>
                <p>{value}</p>
            </div>
        )
    }

}

function mapStateToProps(state) {
    // console.log(state)
    return {
        value: state.color
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeColor: (value) => {
            dispatch({
                type: CHANGE_COLOR,
                payload: {
                    value
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
