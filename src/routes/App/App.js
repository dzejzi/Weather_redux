import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ADD, MINUS} from './../../ducks/weather';


class App extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.add}>CLICK +</button>
                <button onClick={this.props.minus}>CLICK -</button>
                <p>{this.props.count}</p>
            </div>
        )
    }

}

function mapStateToProps(state) {
    console.log(state)
    return {
        count: state.weather
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: () => {
            dispatch({
                type: ADD
            })
        },
        minus: () =>{
            dispatch({
                type: MINUS
            })

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
