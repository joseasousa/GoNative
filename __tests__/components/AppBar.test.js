import React from 'react';
import { shallow } from 'enzyme';

import { Text} from 'react-native';
import AppBar from '../../components/AppBar';


describe('<AppBar />', () => {
  it('render', () => {
    const wrapper = shallow(<AppBar text='teste' />);

    expect(wrapper.find(Text).children().text()).toBe('teste');
  });
});
