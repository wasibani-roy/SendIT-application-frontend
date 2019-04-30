import ActionTypes from "../../actions/types";
import signupReducer from "../../reducers/signupReducer";

describe("signupReducer", () => {
  const initialState = {
    message: '',
    errors: {},
    isSuccessful: false,
    token: '',
  };
  
  it("should handle REGISTER_SUCCESS", () => {
    const successAction = {
      type: ActionTypes.REGISTER_SUCCESS,
      payload: {
        message: "you have successfully registered",
      },
    };
  
    const successState = {
      isSuccessful: true,
      message: "you have successfully registered",
      errors: {},
    };
  
    expect(signupReducer(initialState, successAction)).toEqual(successState);
  });

  it("should handle REGISTER_FAILURE", () => {
    const failureAction = {
      type: ActionTypes.REGISTER_FAILURE,
      payload: {},
    };
  
    const failureState = {
      isSuccessful: false,
      errors: {},
      message: "",
      token: "",
    };
    expect(signupReducer(initialState, failureAction)).toEqual(failureState);
  });
});
