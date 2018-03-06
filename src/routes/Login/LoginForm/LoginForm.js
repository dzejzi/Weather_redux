import React, { Component } from 'react';
import { ifError } from 'assert';

const validLogin = "akra";
const validPassword = "akra";

class LoginFormContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            login: {
                value: '',
                error: null
            },
            password: {
                value: '',
                error: null
            }

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const { value, name } = target;

        this.setState({
            [name]: Object.assign({}, this.state[name], {value})
        });
    }

    validateForm(event) {
        event.preventDefault();
        const { login, password } = this.state

        if (login.value !== validLogin || password.value !== validPassword) {

            if (login.value !== validLogin) {
                this.login.classList.remove('LoginForm__form__input-correct');
                this.login.classList.add('LoginForm__form__input-incorrect');
                this.setState({
                    login: Object.assign({}, this.state.login, {
                        error: 'Please enter the correct login'
                    })
                })
            } else {
                this.login.classList.remove('LoginForm__form__input-incorrect');
                this.login.classList.add('LoginForm__form__input-correct');
                this.setState({
                    login: Object.assign({}, this.state.login, {
                        error: null
                    })
                })
            }

            if (password.value !== validPassword) {
                this.password.classList.remove('LoginForm__form__input-correct');
                this.password.classList.add('LoginForm__form__input-incorrect');
                this.setState({
                    password: Object.assign({}, this.state.password, {
                        error: 'Please enter the correct password'
                    })
                })

            } else {
                this.password.classList.remove('LoginForm__form__input-incorrect');
                this.password.classList.add('LoginForm__form__input-correct');
                this.setState({
                    password: Object.assign({}, this.state.password, {
                        error: null
                    })
                })
            }

            return false
        }

        this.props.handleOnSubmit()

    }

    render() {
        const { handleOnSubmit } = this.props;
        const { login, password } = this.state
       
        return (
            <div className="LoginForm">
                <form onSubmit={this.validateForm} className="LoginForm__form">
                    <input
                        type="text"
                        ref={(login) => { this.login = login; }}
                        placeholder="Login"
                        onChange={this.handleInputChange}
                        name="login"
                        value={login.value}
                        className="LoginForm__form__input"
                    />
                    {login.error && <span className="LoginForm__form__message">{login.error}</span>}

                    <input
                        type="password"
                        ref={(password) => { this.password = password; }}
                        placeholder="Password"
                        onChange={this.handleInputChange}
                        name="password"
                        value={password.value}
                        className="LoginForm__form__input"
                    />
                    {password.error && <span className="LoginForm__form__message">{password.error}</span>}
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
