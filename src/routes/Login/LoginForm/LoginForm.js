import React, { Component } from 'react';
import { ifError } from 'assert';

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

        if (!(loginValue === login) || !(passwordValue === password)) {

            if (!(loginValue === login)) {
                this.login.classList.remove('LoginForm__form__input-correct');
                this.login.classList.add('LoginForm__form__input-incorrect');               
                this.login.nextElementSibling.innerHTML = "Please enter the correct login"
            }else{
                this.login.classList.remove('LoginForm__form__input-incorrect');
                this.login.classList.add('LoginForm__form__input-correct');                
                this.login.nextElementSibling.innerHTML = ""
            }

            if (!(passwordValue === password)) {
                this.password.classList.remove('LoginForm__form__input-correct');
                this.password.classList.add('LoginForm__form__input-incorrect'); 
                this.password.nextElementSibling.innerHTML = "Please enter the correct password"
            }else{
                this.password.classList.remove('LoginForm__form__input-incorrect');
                this.password.classList.add('LoginForm__form__input-correct');    
                this.password.nextElementSibling.innerHTML = "" 
            }

            return false
        } 

        this.props.handleOnSubmit()       

    }

    render() {
        const { handleOnSubmit } = this.props;
        const { loginValue, passwordValue } = this.state

        return (
            <div className="LoginForm">
                <form onSubmit={this.validateForm} className="LoginForm__form">
                    <input
                        type="text"
                        ref={(login) => { this.login = login; }}
                        placeholder="Login"
                        onChange={this.handleInputChange}
                        name="loginValue"
                        value={loginValue}
                        className="LoginForm__form__input"
                    />
                    <span className="LoginForm__form__message"></span>
                    <input
                        type="text"
                        ref={(password) => { this.password = password; }}
                        placeholder="Password"
                        onChange={this.handleInputChange}
                        name="passwordValue"
                        value={passwordValue}
                        className="LoginForm__form__input"
                    />
                    <span className="LoginForm__form__message"></span>
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
