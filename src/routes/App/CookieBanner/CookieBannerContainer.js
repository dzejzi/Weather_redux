import React, { Component } from 'react';
import CookieBanner from './CookieBanner';


class CookieBannerContainer extends Component {

    constructor() {
        super()
        this.state = {
            accepted: false
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount() {
        if (!localStorage.getItem("cookiesAccepted")) {
            return
        }
        this.setState({
            accepted: true
        })
    }

    handleOnClick() {
        this.setState({
            accepted: true
        }, () => localStorage.setItem("cookiesAccepted", true)
        );
    }

    render() {
        const {
            accepted
        } = this.state;

        return (
            <CookieBanner
                accepted={accepted}
                handleOnClick={this.handleOnClick}
            />
        )
    }
}

export default CookieBannerContainer