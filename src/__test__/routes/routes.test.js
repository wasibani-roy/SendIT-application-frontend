import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes';

describe('Home component', () => {
  const wrapper = shallow(<Routes />);
  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});