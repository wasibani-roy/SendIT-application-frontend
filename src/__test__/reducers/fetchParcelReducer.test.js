import fetchParcelsReducer from "../../reducers/fetchParcelReducer";
import { PARCEL_FETCH_SUCCESSFUL, PARCEL_FETCH_NOT_FOUND } from '../../actions/types';

describe("ParcelReducer test", () => {
  it("should return correct state for successful parcel fetch action", () => {
    const expectedState = {
      parcels: [],
    };

    const action = {
      type: PARCEL_FETCH_SUCCESSFUL,
      payload: [],
    };

    expect(fetchParcelsReducer({}, action)).toEqual(expectedState);
  });

  it("should return for no action", () => {
    const expectedState = {};

    const action = {
      type: "INVALID",
      payload: [],
    };
    
    expect(fetchParcelsReducer({}, action)).toEqual(expectedState);
  });
});
