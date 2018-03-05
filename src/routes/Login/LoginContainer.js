import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { IS_AUTHENTICATED } from './../../ducks/authenticate';


class LoginContainer extends Component {

    render() {       
        const { from } = this.props.location.state || { from: { pathname: "/" } };     
        const { setAuthenticated, authenticate } = this.props;

        if (authenticate) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={ ()=> setAuthenticated(true) }>Log in</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {authenticate} = state
    return {
        authenticate: authenticate
    }
}


function mapDispatchToProps(dispatch) {
    return {
        setAuthenticated: (value) => {
            dispatch({
                type: IS_AUTHENTICATED, 
                payload: {
                    value
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
