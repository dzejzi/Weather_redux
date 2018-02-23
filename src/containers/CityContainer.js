import React, { Component } from 'react';

const url = "http://api.wunderground.com/api/4af47e77859b009e/conditions/q/CA/";


class CityContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
       this.requestInitialData(this.props.city);
    }

    async requestInitialData(city) {
        const requestUrl = url + city + '.json';
        try {
            const response = await fetch(requestUrl);
            const parseResponse = await response.json();
            console.log(parseResponse.current_observation)
            this.setState({
                data: parseResponse.current_observation
            })
        }
        catch (error) {
            console.log('there was an error')
        }
    }

    render() {
        const { data } = this.state;
        
        return (
            <div>
                {!data && (<span>loading...</span>)}
                {data && (<span>{data.icon}</span>)}
            </div>
        )
    }


}

export default CityContainer;