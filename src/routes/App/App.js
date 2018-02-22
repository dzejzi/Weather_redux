import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {

    render() {
        return <span>jestem App!</span>
    }

}

export default connect()(App);