import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ParcelContainer from '../../container/createParcelContainer';


describe('create parcel test', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <ParcelContainer />
      </MemoryRouter>,
    );
  });
  test('', () => {
    const wrapper = shallow(<ParcelContainer />);
    const event = { target: { id: 'parcel_name', value: '' } };
    expect(wrapper.instance().handleText(event));
  });

  it('should submit user parcel', () => {
    component.find('input#parcel_name').simulate('change', { target: { id: 'parcel_name', value: '' } });
    component.find('form').simulate('submit');
  });
});
