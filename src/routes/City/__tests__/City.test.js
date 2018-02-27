import React from 'react';
import City from '../City';
import { shallow, mount } from 'enzyme';

describe('<City/>', () => {
    it('should render Loader', () => {
        const props = {
            isRequestingInitialData: true,
            city: 'test1',
            country: 'test2',
            stateName: 'test3',
            temperature: 'test4',
            icon: 'test5',
            iconUrl: 'test6',
            localTime: 'test7'
        }
        const wrapper = shallow(<City {...props} />);

        expect(wrapper).toMatchSnapshot('isRequestingInitialData=false');
        wrapper.setProps({isRequestingInitialData: false});
        expect(wrapper).toMatchSnapshot('isRequestingInitialData=true');

        
    })
})