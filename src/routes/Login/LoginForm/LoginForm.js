import React, { Component } from 'react';


class LoginFormContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loginValue: '',
            passwordValue: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const { value, name } = target;

        this.setState({
            [name]: value
        });
    }

    validateForm(event) {
        event.preventDefault();
        const { loginValue, passwordValue } = this.state
        if (loginValue === 'akra' && passwordValue === 'akra') {
            this.props.handleOnSubmit()
        }

    }

    render() {
        const { handleOnSubmit } = this.props;
        const { loginValue, passwordValue } = this.state

        return (
            <div>
                <form onSubmit={this.validateForm}>
                    <input
                        type="text"
                        placeholder="Login"
                        onChange={this.handleInputChange}
                        name="loginValue"
                        value={loginValue}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        onChange={this.handleInputChange}
                        name="passwordValue"
                        value={passwordValue}
                    />
                    <button type="submit" value="Submit">LOGIN</button>
                </form>

            </div>
        )
    }

}

export default LoginFormContainer
