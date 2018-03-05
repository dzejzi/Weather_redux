import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  hashHistory,
  Redirect,
  withRouter
} from 'react-router-dom';
import store from './store';
import App from './routes/App';
import City from './routes/City';
import Login from './routes/Login';
import PrivateRoute from './routes/PrivateRoute';


/*HashRouter*/
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={App} />
         <PrivateRoute path="/city/:state/:name" component={City} />
      </Switch>
    </Router>
  </Provider>,
    document.getElementById('root')
);