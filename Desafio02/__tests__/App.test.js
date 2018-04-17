import React from 'react';
import { shallow } from 'enzyme';
import Header from '/components/Header';

describe('<App />', () => {
    it('App render', () => {
        const wrapper = shallow(<Header navigation={() => {}}/>);
        console.log('wrapper', wrapper);
        expect(wrapper).toHaveLength(1);
    });
})
