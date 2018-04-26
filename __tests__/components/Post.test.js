import React from 'react';
import { shallow } from 'enzyme';

import Post from '../../components/Post';

const post = {
  title: 'teste',
  autor: 'aut',
  description: 'des',
};

describe('<Post />', () => {
  it('render', () => {
    const wrapper = shallow(<Post post={post} />);
  });
});
