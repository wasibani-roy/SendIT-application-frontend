import React from "react";
import { shallow } from "enzyme";
import { Parcels, mapStateToProps } from "../../container/parcelViewContainer";

const props = {
    fetchParcelsAction: jest.fn(),
  parcels: [
    {
      parcel_name: "test",
      receiver: "john",
    },
  ],
};

describe("Article home component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Parcels {...props} />);

    const instance = wrapper.instance();
    const spy = jest.spyOn(wrapper.instance().props, "fetchParcelsAction");
    instance.componentWillMount();
    expect(spy).toHaveBeenCalled();
  });
  
  it("should map state to props", () => {
    const state = {
      fetchParcelsReducer: {
        parcels: [],
      },
    };
    expect(mapStateToProps(state)).toEqual({
        parcels: [],
    });
  });
});
