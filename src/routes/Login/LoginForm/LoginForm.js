import React, { Component } from 'react';

const login = "akra";
const password = "akra";

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
        if (loginValue === login && passwordValue === password) {
            this.props.handleOnSubmit()
        }

    }

    render() {
        const { handleOnSubmit } = this.props;
        const { loginValue, passwordValue } = this.state

        return (
            <div className="LoginForm">
                <form onSubmit={this.validateForm} className="LoginForm__form">
                    <input
                        type="text"
                        placeholder="Login"
                        onChange={this.handleInputChange}
                        name="loginValue"
                        value={loginValue}
                        className="LoginForm__form__input"
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        onChange={this.handleInputChange}
                        name="passwordValue"
                        value={passwordValue}
                        className="LoginForm__form__input"
                    />
                    <button
                        type="submit"
                        value="Submit"
                        className="LoginForm__form__button">
                        Submit
                    </button>
                </form>

            </div>
        )
    }

}

export default LoginFormContainer
