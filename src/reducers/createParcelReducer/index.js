import ActionTypes from "../../actions/types";


const initialState = {
  isSuccessful: false,
  errors: {},
};

const createParcelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_PARCEL_FALIURE:
      return {
        ...state,
        isSuccessful: false,
        errors: action.payload,
      };
    case ActionTypes.CREATE_PARCEL_SUCCESS:
      return {
        ...state,
        article: action.payload,
        isSuccessful: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default createParcelReducer;
