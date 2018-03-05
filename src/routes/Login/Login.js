import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { handleOnSubmit, pathname } = this.props;
        return (
            <div className="Login">
                <h1 className="Login__header">Log in</h1>
                {/*<p>You must log in to view the page at {pathname}</p>*/}
                <LoginForm handleOnSubmit={handleOnSubmit} />
            </div>
        )
    }
}

export default Login

