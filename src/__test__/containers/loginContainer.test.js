import React from "react";
import { shallow } from "enzyme";
import { LoginContainer, mapStateToProps } from "../../container/loginContainer";

const props = {
  LoginAction: jest.fn(),
  history: {
    push: jest.fn(),
  },
};

const user = {
  identity:{
    user_id:17,
  },
  email: "roy@andela.com",
  password: "spidermansucks123",
};

const generateToken = (user) => {
  const jwt = require("jsonwebtoken");
  const token = jwt.sign(user, "sfhjjkdfjdkdfjdk", { expiresIn: 60 * 60 * 24 });
  return token; 
};

const token = generateToken(user);

describe("LoginView", () => {
  const wrapper = shallow(<LoginContainer {...props} />);
  it("should render without crashing", () => {
    const props = {};
    const instance = new LoginContainer(props);
    const wrapper = shallow(instance.render());
    expect(wrapper).toMatchSnapshot();
  });

  it("should redirect on new token", () => {
    const newProps = {
      ...props,
      token,
    };
    const wrapper = shallow(<LoginContainer {...props} />);
    const spyProp = jest.spyOn(wrapper.instance().props.history, "push");
    wrapper.setProps(newProps);
    expect(spyProp).toHaveBeenCalled();
  });
  
  it("should call the login action", () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          email: {
            value: "testemail@mail.com",
          },
          password: {
            value: "Password1",
          },
        },
      },
    };
    wrapper.find("Login").dive().find("form")
      .simulate("submit", event);
    const spyProp = jest.spyOn(wrapper.instance().props, "LoginAction");
    expect(spyProp).toHaveBeenCalled();
  });

  it("should map state to props", () => {
    const state = {
      loginReducer: {
        token: "",
        errors: {},
        isSuccessful: true,
      },
    };
    expect(mapStateToProps(state)).toEqual({
      token: "",
      errors: {},
      isSuccessful: true,
    });
  });
});
