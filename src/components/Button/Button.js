import React, { PureComponent } from 'react';
import './Button.scss';

class Button extends PureComponent {
    render() {
        const { children } = this.props;
        return (
            <button className="Button">{children}</button>
        )
    }

}

export default Button