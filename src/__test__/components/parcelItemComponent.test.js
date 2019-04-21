import React from "react";
import { shallow } from "enzyme";
import ParcelItem from "../../components/parcelItemComponent";

describe("ArticleCard component test", () => {
  const props = {
    parcel_name: "test parcel",
    receiver: "john",
    destintion: "kampala",
  };
  const wrapper = shallow(<ParcelItem {...props} />);

  it("Should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
