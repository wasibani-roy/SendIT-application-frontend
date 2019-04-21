import { PARCEL_FETCH_SUCCESSFUL, PARCEL_FETCH_NOT_FOUND } from '../../actions/types';

const initialState = {
  parcels: [],
};

const fetchParcelsReducer = (state = initialState, action) => {
  switch (action.type) {
  case PARCEL_FETCH_SUCCESSFUL:
    return {
      ...state,
      parcels: action.payload
    };
  default:
    return state;
  }
};

export default fetchParcelsReducer;
