import React from 'react';
import AppInputSearch from '../AppInputSearch';
import { shallow, mount } from 'enzyme';


describe('<AppInputSearch/>', () => {
    it('should render Loader', () => {

        const props = {
            value: 'test1',
            handleInputChange: 'test2',
            searchedCities: [],
            isRequesting: true
        }
        const wrapper = shallow(<AppInputSearch {...props} />);

        expect(wrapper).toMatchSnapshot('isRequesting=true');
        wrapper.setProps({ isRequesting: false });
        expect(wrapper).toMatchSnapshot('isRequesting=false');

    });

})

describe('createPath() return path', () => {

    it('should createPath()', () => {

        const wrapper = shallow(<AppInputSearch />);
        const path = wrapper.instance().createPath('Name City, trash', 'AB');

        expect(path).toMatch(/\/city\/[A-Z]{2}\/[A-Za-z_]{2,}/);
        //console.log('path', path)
    });

})

describe('parseCitiesToComponents() return ul', () => {

    it('return ul', () => {

        const wrapper = shallow(<AppInputSearch />);
        const array = [
            {
                name: 'test1',
                stateAbbreviation: 'TJ'
            },
            {
                name: 'test2',
                stateAbbreviation: 'TD'
            },
            {
                name: 'test3',
                stateAbbreviation: 'TT'
            }
        ]

        const list = wrapper.instance().parseCitiesToComponents(array);

        expect(list).toMatchSnapshot();
        //console.log('path', path)
    });

})