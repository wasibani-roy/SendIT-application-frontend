import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types";

const {API_URL} = process.env;

const LoginAction = data => dispatch => {
  const userData = {
    email: data.email,
    password: data.password,
  };
  return axios.post(`${API_URL}/v2/auth/login/`, userData)
    .then((res) => {
      localStorage.setItem('access_token', res.data.access_token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.access_token,
      });
    }).catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message,
      });
    });
};
export default LoginAction;
