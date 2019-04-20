import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SiginupContainer from '../../container/signupContainer';

describe('handle Invoke email for password reset', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <SiginupContainer />
      </MemoryRouter>,
    );
  });
  test('test that handle change is called', () => {
    const wrapper = shallow(<SiginupContainer />);
    const event = { target: { id: 'email', value: '' } };
    expect(wrapper.instance().handleChange(event));
  });

  it('should submit username', () => {
    component.find('input#username').simulate('change', { target: { id: 'username', value: '' } });
    component.find('form').simulate('submit');
  });
});
