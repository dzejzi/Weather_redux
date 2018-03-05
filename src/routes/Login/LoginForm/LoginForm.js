import React, { Component } from 'react';

class LoginForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { handleOnSubmit } = this.props;
        return (
            <div>
                <div>Jestem LoginForm</div>
                <button onClick={handleOnSubmit}>LOGIN</button>
            </div>
        )
    }

}

export default LoginForm

/*const { loginValue, passwordValue } = this.state;
    constructor() {
        super();

        this.state = {
            loginValue: '',
            passwordValue: ''
        };
    }

    handleInputChange(event) {
        const { value } = event.target;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

<input
type="text"
placeholder="Login"
handleChange={this.handleInputChange}
name={loginValue}
/>

<input
type="text"
placeholder="Password"
handleChange={this.handleInputChange}
name={passwordValue} />*/