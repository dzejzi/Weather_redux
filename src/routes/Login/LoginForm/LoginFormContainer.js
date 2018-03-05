import React, { Component } from 'react';
import LoginForm from './LoginForm'

class LoginFormContainer extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        const { handleOnSubmit } = this.props;

        return <LoginForm handleOnSubmit={handleOnSubmit} />
    }
}

export default LoginFormContainer