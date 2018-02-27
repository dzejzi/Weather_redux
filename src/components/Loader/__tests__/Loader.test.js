import React from 'react';
import Loader from '../Loader';
import { shallow, mount } from 'enzyme';

describe('<Loader/>', () => {
    it('should render properly', () => {
        const loader = shallow(<Loader />);
        expect(loader).toMatchSnapshot();
    })
})