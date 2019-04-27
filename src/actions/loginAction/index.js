import axios from 'axios';
import { toast } from "react-toastify";

const jwt = require("jsonwebtoken");

const {API_URL} = process.env;

const LoginAction = (data, obj) => {
  const userData = {
    email: data.email,
    password: data.password,
  };
  return axios.post(`${API_URL}/v2/auth/login/`, userData)
    .then((res) => {
      localStorage.setItem('access_token', res.data.access_token);
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
      obj.history.push('/create');
      setTimeout(() => window.location.reload('/create'), 100);
    }).catch(() => {
        toast.error("A user with this email and password could not be found", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
        });
    });
};
export default LoginAction;
