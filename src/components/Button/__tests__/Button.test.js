import React from 'react';
import Button from '../Button';
import { shallow, mount } from 'enzyme';

describe('<Button />', () => {
    it('should redner properly', () => {
        const button = shallow(<Button>test</Button>);
        expect(button).toMatchSnapshot();
    });

    it('should redner children properly', () => {
        const button = shallow(<Button>test</Button>);
        expect(button.text()).toEqual('test');
    })

    it('should handle click', () => {
        const onClick = jest.fn();
        const button = mount(<Button onClick={onClick}>test</Button>);
        button.simulate('click');
        expect(onClick).toHaveBeenCalled();
    })

    it('should handle onmouseover', () => {
        const onMouseOver = jest.fn();
        const button = mount(<Button onMouseOver={onMouseOver}>test</Button>);
        button.simulate('mouseOver');
        expect(onMouseOver).toHaveBeenCalled();
    })


});