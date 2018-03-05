import React, { Component } from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authenticate, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticate ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

function mapStateToProps(state) {
  const { authenticate } = state
  return {
    authenticate: authenticate
  }
}

export default connect(mapStateToProps)(PrivateRoute);
