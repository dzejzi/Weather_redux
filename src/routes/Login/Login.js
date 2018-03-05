import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { handleOnSubmit, pathname } = this.props;
        return (
            <div>
                <p>Login</p>
                <p>You must log in to view the page at {pathname}</p>
                <LoginForm handleOnSubmit={handleOnSubmit} />
            </div>
        )
    }
}

export default Login

