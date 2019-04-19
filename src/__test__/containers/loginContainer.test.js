
import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import LoginContainer from '../../container/loginContainer';


describe('handle Invoke login', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <LoginContainer />
      </MemoryRouter>,
    );
  });
  it("should render without crashing", () => {
    const props = {};
    const instance = new LoginContainer(props);
    const wrapper = shallow(instance.render());
    expect(wrapper).toMatchSnapshot();
  });
  it('test that handle change to be called', () => {
    const wrapper = shallow(<LoginContainer />);
    const event = { target: { id: 12, value: '' } };
    expect(wrapper.instance().handleChange(event));
  });

  it('should submit user email and password', () => {
    component.find('input#email').simulate('change', { target: { id: 'email', value: '' } });
    component.find('form').simulate('submit');
  });
});
