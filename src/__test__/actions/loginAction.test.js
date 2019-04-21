import moxios from 'moxios';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import LoginAction from '../../actions/loginAction';
import {LOGIN_SUCCESS, LOGIN_FAIL} from '../../actions/types'

jest.mock('react-toastify');
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const {API_URL} = process.env;

describe('login action', () => {
  const store = mockStore({});
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  const url = ``;
  const userData = {
    email: 'roy@andela.com',
    password: 'secret#1',
  };
  const data = {

    access_token: 'dgsggyreiyfg678yu8ve7bbo8',
    message: 'some message',

  };

  it("logs in successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTY1NjM2NDksInVzZX",
          message: "You have successfully signed up"
        },
      });
    });
    const expectedActions = [
      {
        type: LOGIN_SUCCESS,
        payload: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTY1NjM2NDksInVzZX"
      },
    ];
    const valiData = {

      email: "roy@gmail.com",
      password: "password123",
    };
    return store.dispatch(LoginAction(valiData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("retrieves an error message", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 404,
        response: {
          message: "invalid credentials",
          status: "Failed",
        },
      });
    });
    const expectedActions = [
      {"payload": "invalid credentials", "type": "LOGIN_FAIL"}
    ];
    const invalidData = {
      email: "",
      password: "",

    };
    return store.dispatch(LoginAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
