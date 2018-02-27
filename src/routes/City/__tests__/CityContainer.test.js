import React from 'react';
import CityContainer from '../CityContainer';
import { shallow, mount } from 'enzyme';

describe('<CityContainer/>', () => {
    describe('parseResponse', () => {
        const props = {
            match: {
                params: {
                    name: 'test'
                }
            }
        }

        const wrapper = shallow(<CityContainer {...props} />);
        const { parseResponse } = wrapper.instance();

        test('empty params', () => {
            expect(parseResponse).toThrow();
        });

        test('correct params', () => {
            expect(parseResponse({
                current_observation: {
                    display_location: {
                        city: 'test1',
                        country: 'test2',
                        state_name: 'test3'
                    },
                    feelslike_c: 'test4',
                    icon: 'test5',
                    icon_url: 'test6',
                    local_time_rfc822: 'test7'
                }
            })).toMatchSnapshot();
        })

    })
})