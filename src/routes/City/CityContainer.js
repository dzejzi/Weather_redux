import React, { Component } from 'react';
import City from './City';

const url = "http://api.wunderground.com/api/4af47e77859b009e/conditions/q/";


class CityContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            isRequestingInitialData: true
        }
    }

    componentDidMount() {
        const { name, state } = this.props.match.params;
       
        this.requestInitialData(name, state);
    }

    async requestInitialData(city, state) {
        const requestUrl = `${url}${state}/${city}.json`;
       
        this.setState({
            isRequestingInitialData: true
        });
        try {
            const response = await fetch(requestUrl);
            const parseResponse = await response.json();
            const parsed = this.parseResponse(parseResponse);

            this.setState({
                ...parsed,
                isRequestingInitialData: false
            })
        }
        catch (error) {
            console.log('there was an error')
        }
    }

    parseResponse(response) {
        const {
            current_observation: {
                display_location: {
                    city,
                    country,
                    state_name
                },
                feelslike_c,
                icon,
                icon_url,
                local_time_rfc822
            }
        } = response;
        return {
            city,
            country,
            stateName: state_name,
            temperature: feelslike_c,
            icon,
            iconUrl: icon_url,
            localTime: local_time_rfc822
        }

    }

    render() {
        const {
            isRequestingInitialData,
            city,
            country,
            stateName,
            temperature,
            icon,
            iconUrl,
            localTime
        } = this.state;

        return (
            <City
                isRequestingInitialData={isRequestingInitialData}
                city={city}
                country={country}
                stateName={stateName}
                temperature={temperature}
                icon={icon}
                iconUrl={iconUrl}
                localTime={localTime}
            />
        )
    }


}

export default CityContainer;