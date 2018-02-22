import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RED, GREEN, CHANGE_COLOR } from './../../ducks/color';


class App extends Component {

    render() {
        const { changeColor, value } = this.props;
        return (
            <div>
                <button onClick={() => changeColor('red')}>RED</button>
                <button onClick={() => changeColor('green')}>GREEN</button>
                <button onClick={() => changeColor('blue')}>BLUE</button>
                <p>{value}</p>
            </div>
        )
    }

}

function mapStateToProps(state) {
    console.log(state)
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
