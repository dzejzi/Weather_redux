import React, { PureComponent } from 'react';


class Button extends PureComponent {
    render() {
        const { children, ...rest } = this.props;
        return (
            <button {...rest} className="Button">{children}</button>
        )
    }

}

export default Button