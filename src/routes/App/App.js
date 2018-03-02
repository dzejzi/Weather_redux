import React, { Component } from 'react';
import { CHANGE_CITY } from './../../ducks/city';
import cloudIcon from '../../resources/cloud.svg';
import SvgIcon from '../../components/SvgIcon';
import AppInputSearch from './AppInputSearch';
import CookieBanner from './CookieBanner'

class App extends Component {

    componentDidMount() {
        console.log(this.middleIcon);
    }


    render() {
        const { changeCity, value } = this.props;
        return (
            <div className="weatherApp">
                <CookieBanner />
                
                <h1>What's the weather like?</h1>
                <AppInputSearch />

                <div className="clouds">
                    <SvgIcon src={cloudIcon} className="icon" />
                    <SvgIcon ref={middleIcon => this.middleIcon = middleIcon} src={cloudIcon} className="icon" />
                    <SvgIcon src={cloudIcon} className="icon" />
                </div>

            </div>
        )
    }

}


export default App
