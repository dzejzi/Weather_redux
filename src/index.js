import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  hashHistory
} from 'react-router-dom';
import store from './store';
import App from './routes/App';
import City from './routes/City';


/*HashRouter*/ 
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/city/:name" component={City} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);