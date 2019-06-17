import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../404';
import gatsby from 'gatsby';

describe('<NotFound>', () => {
  it('should render', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
