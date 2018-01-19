import React from 'react';
import { shallow } from 'enzyme';
import { ScrollView } from 'react-native';

import Posts from '../../components/Posts';

const posts = [
  {
    id: 1,
    title: 'teste',
    autor: 'aut',
    description: 'des',
  },
  {
    id: 2,
    title: 'teste',
    autor: 'aut',
    description: 'des',
  },
];


describe('<Posts />', () => {
  it('Render posts', () => {
    const wrapper = shallow(<Posts posts={posts} />);

    console.log('teste', wrapper);
    expect(wrapper.find(ScrollView).exists()).toBe(true);

    expect(wrapper.find(ScrollView).children()).toHaveLength(2);
  });
});
