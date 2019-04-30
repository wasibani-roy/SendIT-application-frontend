import ActionTypes from "../../actions/types";

const initialState = {
  message: '',
  errors: "",
  isSuccessful: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state, isSuccessful: true, message: action.payload,
      };
    case ActionTypes.REGISTER_FAILURE:
      return {
        ...state, errors: action.payload, isSuccessful: false,
      };

    default:
      return { ...state };
  }
};

export default signUpReducer;
