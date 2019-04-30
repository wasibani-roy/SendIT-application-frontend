import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { PARCEL_FETCH_SUCCESSFUL, PARCEL_FETCH_NOT_FOUND } from "../../actions/types";
import fetchParcelsAction from "../../actions/fetchParcelAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("parcels actions tests", () => {
  const props = {
    history: {
      push: jest.fn(),

    },
  };
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });


  it("Should fetch parcels", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          parcels: [],
        },
      });
    });
    const expectedActions = [{payload: {"parcels": []}, type: "PARCEL_FETCH_SUCCESSFUL"}];
    return store.dispatch(fetchParcelsAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})